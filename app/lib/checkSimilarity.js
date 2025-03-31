import stringSimilarity from "string-similarity";

// Function to check email similarity with a user's name
export default async function checkSimilarity(name, email) {
  // Ensure both name and email are provided
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  // Extract the local part of the email (before '@')
  const localPart = email.split("@")[0].toLowerCase();

  // Split name into first and last name
  const nameParts = name.toLowerCase().split(" ");

  // Check for direct matches between name parts and the local part of the email
  const directMatch = nameParts.some((part) => localPart.includes(part));
  if (directMatch) {
    console.log("Similarity: Direct matched!");
    return 1; // Return 1 if there's an exact or partial match
  }

  // Perform fuzzy string matching and return the similarity score
  const similarityScore = stringSimilarity.compareTwoStrings(
    name.toLowerCase(),
    localPart
  );
  console.log("Similarity: ", similarityScore);
  return similarityScore; // Return similarity score (0 to 1)
}

// Usage example (you can call this function in an API route or frontend code)
// const result = await checkSimilarity("Angry Red", "angryred027@gmail.com");
// console.log("Result: ", result); // Output: Similarity score between 0 and 1
