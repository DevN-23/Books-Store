import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "nest_admin",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Response from backend");
});

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.post("/book", (req, res) => {
  const query =
    "INSERT INTO books (`title`, `description`, `cover`, `price`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);

    return res.json("Book created successfully.");
  });
});

app.delete("/book/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE id = ?";

  db.query(query, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book deleted successfully.");
  });
});

app.put("/book/:id", (req, res) => {
  const bookId = req.params.id;
  const query =
    "UPDATE books SET `title` = ?, `description` = ?, `cover` = ?, `price` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price,
  ];

  db.query(query, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book updated successfully.");
  });
});

app.listen(8000, () => {
  console.log("Backend is running on port: 8000");
});
