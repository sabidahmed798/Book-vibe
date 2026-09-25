"use client";

import { BookContext } from "@/contex/bookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);

  const handleReadBook = () => {
    console.log("Read button triggered", book);
    setReadBooks([...readBooks, book]);
    alert(`You have read "${book.bookName}"`);
  };

  return (
    <button className="btn btn-primary flex-1" onClick={() => handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;
