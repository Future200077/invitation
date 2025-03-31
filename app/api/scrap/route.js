import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const emailPattern =
  /[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com|aol\.com|zoho\.com|yandex\.com|mail\.com)/g;

export async function scrapeEmails(url, visited = new Set(), depth = 0) {
  try {
    if (depth >= 2 || visited.has(url)) {
      console.log("Recursive depth = 2");
      return null;
    }

    visited.add(url);
    console.log(`Visiting: ${url}`);

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const plainText = $("body").text().replace(/\s+/g, " ").trim();

    // try {
    //   const dirPath = path.join(process.cwd(), "scrap");
    //   if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    //   const filePath = path.join(dirPath, "plainText.txt");
    //   fs.writeFileSync(filePath, plainText, "utf8");
    //   console.log("File written successfully!");
    // } catch (error) {
    //   console.log("Failed to write file: " + error.message);
    // }

    const emails = [];
    let match;
    while ((match = emailPattern.exec(plainText)) !== null) {
      emails.push(match[0]);
    }

    if (emails.length > 0) return emails;

    console.log("No emails found in the page text. Checking <a> tags...");
    const contactLinks = [];
    $("a").each((index, element) => {
      const href = $(element).attr("href");
      if (!href) return;

      if (href.startsWith("mailto:")) {
        const emailFromLink = href.replace("mailto:", "").trim();
        if (
          emailPattern.test(emailFromLink) &&
          !emails.includes(emailFromLink)
        ) {
          emails.push(emailFromLink);
        }
      } else if (
        href.includes("contact") ||
        href.includes("about") ||
        href.includes("email")
      ) {
        const fullUrl = href.startsWith("http")
          ? href
          : new URL(href, url).href;
        contactLinks.push(fullUrl);
      }
    });

    if (emails.length === 0 && contactLinks.length > 0) {
      console.log("Found contact links, scraping them recursively:");
      for (const link of contactLinks) {
        const foundEmails = await scrapeEmails(link, visited, depth + 1);
        if (foundEmails?.length > 0) return foundEmails;
      }
    }

    return emails.length > 0 ? emails : [];
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return [];
  }
}

export async function GET(req, res) {
  const url = await req.json();

  if (!url) {
    return NextResponse.json({ message: "URL is required" }, { status: 400 });
  }

  try {
    const emails = await scrapeEmails(url);
    console.log("Found Emails:", emails);
    return NextResponse.json({ emails });
  } catch (error) {
    return NextResponse.json({ error: { message: "Error scraping emails" } });
  }
}
