import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="font-bold text-4xl text-center">Books</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {
          books.map(book => <Book book={book} key={book.bookId}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;

// 1. state to store the book
// 2. useEffect
// 3. fetch to load data
// 4.set the data to the state
