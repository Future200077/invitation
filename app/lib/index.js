const mysql = require("mysql2");
const fs = require("fs");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost", // your MySQL host
  user: "root", // your MySQL username
  password: "", // your MySQL password
  database: "usa_names", // your database name
});

// Function to insert names from file into MySQL database
const insertNames = async () => {
  try {
    // Read the names from the file
    const data = fs.readFileSync("last_names.txt", "utf8");

    // Split the data into an array of names
    const names = data
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    // Insert names into the database one by one
    for (let name of names) {
      const query = "INSERT INTO last_names (last_name) VALUES (?)";
      connection.query(query, [name], (err, results) => {
        if (err) {
          console.error("Error inserting name:", err);
        } else {
          console.log(`Inserted name: ${name}`);
        }
      });
    }

    // Close the connection after all inserts are done
    connection.end();
  } catch (err) {
    console.error("Error reading the file or inserting names:", err);
  }
};

// Call the function to insert names
insertNames();
