import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shiv@199",
  database: "auth_db",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("connection failed", err);
  } else {
    console.log("database connected Successfully");
  }
});

export default db;
