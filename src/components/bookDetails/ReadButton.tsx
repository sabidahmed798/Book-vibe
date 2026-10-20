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
    <button className="btn btn-primary " onClick={() => handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;

{
  /* <div className="bg-white p-6">
  <button className="btn btn-neutral btn-outline">Outline</button>
  <button className="btn btn-neutral btn-dash">Dash</button>
</div> */
}
