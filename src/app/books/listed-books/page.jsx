"use client";
import { useContext } from "react";
import { BookContext } from "@/contex/bookContext";
const ListedBooks = () => {
  //   const { readBooks } = useContext(BookContext);
  const { readBooks } = useContext(BookContext);
  console.log("Read Books:", readBooks);
  return <div>Listed Books</div>;
};

export default ListedBooks;
