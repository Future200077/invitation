import { NextResponse } from "next/server";
import { checkName } from "@/lib/checkName";
import { checkEmail } from "@/lib/checkEmail";
import { scrapeEmails } from "../scrap/route";
import checkSimilarity from "@/lib/checkSimilarity";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const restrictedProviders = [
  "twitter",
  "youtube",
  "instagram",
  "linkedin",
  "facebook",
];

export async function GET() {
  return NextResponse.json(
    {
      success: {
        message: "Good Success!",
      },
    },
    { status: 200 }
  );
}

export async function POST(req) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub token is missing" },
      { status: 500 }
    );
  }

  try {
    const { userName } = await req.json();

    // First GraphQL query: Get user profile
    const userQuery = `
      query($userName: String!) {
        user(login: $userName) {
          login
          name
          avatarUrl
          email
          websiteUrl
          createdAt
          repositories(privacy: PUBLIC) {
            totalCount
          }
          socialAccounts(first: 10) {
            nodes {
              displayName
              provider
              url
            }
          }  
        }
      }
    `;

    const userResponse = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: userQuery, variables: { userName } }),
    });

    if (!userResponse.ok) {
      return NextResponse.json(
        { error: { message: "Failed to fetch user data from GitHub" } },
        { status: userResponse.status }
      );
    }

    const userData = await userResponse.json();
    const user = userData?.data?.user;

    if (!user) {
      return NextResponse.json(
        { error: { message: "User not found" } },
        { status: 404 }
      );
    }

    let emails = [];

    // Check if the name is valid
    const validUSAName = await checkName(user.name);
    if (validUSAName) {
      user.isUSAName = true;
      // If public email is available, use it
      if (user.email) {
        emails.push(user.email);
      } else {
        if (user.websiteUrl || user.socialAccounts.nodes.length > 0) {
          const urlList = [];
          const socialProfileURLs = [];
          user.socialAccounts.nodes.map((item, index) => {
            if (
              !restrictedProviders.some((url) =>
                item.provider.toLowerCase().includes(url)
              )
            ) {
              socialProfileURLs.push(item.url);
            }
          });

          if (user.websiteUrl) urlList.push(user.websiteUrl);
          if (socialProfileURLs.length > 0)
            urlList.splice(0, urlList.length, ...socialProfileURLs);

          console.log(urlList);
          for (const url of urlList) {
            console.log("Scraping...");
            const scrapedEmails = await scrapeEmails(url);
            if (scrapedEmails.length > 0) {
              console.log("Scraped Emails: ", scrapedEmails);
              emails = [...scrapedEmails];
              break;
            }
          }
        }
        if (emails.length === 0) {
          console.log("Getting from commits...");
          // Second GraphQL query: Fetch commit author emails
          const commitQuery = `
          query($userName: String!) {
            user(login: $userName) {
              repositories(first: 20, privacy: PUBLIC, isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
                nodes {
                  name
                  owner {
                    login
                  }
                  defaultBranchRef {
                    name
                    target {
                      ... on Commit {
                        history(first: 20) {
                          edges {
                            node {
                              author {
                                email
                              }
                              committedDate
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

          const commitResponse = await fetch(GITHUB_GRAPHQL_URL, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: commitQuery,
              variables: { userName },
            }),
          });

          if (commitResponse.ok) {
            const commitData = await commitResponse.json();

            const repositories = commitData?.data?.user?.repositories?.nodes;

            // console.log(JSON.stringify(repositories[0]));
            if (repositories) {
              for (const repo of repositories) {
                if (repo.defaultBranchRef?.target?.history?.edges) {
                  for (const commit of repo.defaultBranchRef.target.history
                    .edges) {
                    const email = commit.node.author.email;
                    const similarityScore1 = await checkSimilarity(
                      user.name,
                      email
                    );
                    const similarityScore2 = await checkSimilarity(
                      user.login,
                      email
                    );
                    if (
                      checkEmail(email) &&
                      (similarityScore1 > 0.4 || similarityScore2 > 0.4) &&
                      !emails.includes(email.toLowerCase())
                    ) {
                      console.log("Pushed");
                      emails.push(email.toLowerCase());
                      if (emails.length >= 3) break;
                    }
                  }
                }
                if (emails.length >= 3) break;
              }
            }
          }
        }
      }
    } else {
      user.isUSAName = false;
    }

    if (emails.length > 0) user.emails = emails;

    console.log("Emails: ", emails);
    // Return final data with emails
    return NextResponse.json(
      {
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: { message: "Internal server error" } },
      { status: 500 }
    );
  }
}
