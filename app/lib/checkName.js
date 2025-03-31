import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "usa_names",
});

export const checkName = async (fullName) => {
  if (!fullName) {
    console.log("Missing full_name");
    return false;
  }

  const firstName = fullName.split(" ")[0].trim();
  const lastName = fullName.split(" ")[1]?.trim(); // Handle case if lastName is undefined

  if (firstName) {
    let query = "SELECT * FROM first_names WHERE first_name = ?";
    const [result] = await connection.execute(query, [firstName]);

    if (result.length > 0) {
      console.log("Valid first_name");

      if (lastName) {
        query = "SELECT * FROM first_names WHERE first_name = ?";
        const [lastResult] = await connection.execute(query, [lastName]);

        if (lastResult.length > 0) {
          console.log("Valid last_name");
          return true;
        } else {
          console.log("Invalid last_name");
          return false;
        }
      } else {
        console.log("Missing last_name");
        return false;
      }
    } else {
      console.log("Invalid first_name");
      return false;
    }
  } else {
    console.log("Missing first_name");
    return false;
  }
};
