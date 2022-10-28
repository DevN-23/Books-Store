import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        console.log(res);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
    return () => {};
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8000/book/" + id);
      setBooks((previous) => previous.filter((book) => book.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link to="/add">
        <button>Add New Book</button>
      </Link>
      <h1>Books Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            {book.cover ? <img src={book.cover} /> : null}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={(e) => handleDelete(book.id)}>
              Delete
            </button>
            <Link to={`/update/${book.id}`}>
              <button className="update">Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
