"use client";

import { BookContext } from "@/contex/bookContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext);

  const handleAddTowishlist = () => {
    console.log("add to wishlist btn triggered", book);
    setWishlist([...wishlist, book]);
    alert(`You have read "${book.bookName}" to your wishlist`);
  };

  return (
    <button className="btn btn-primary " onClick={() => handleAddTowishlist()}>
      Add To wishlist
    </button>
  );
};

export default WishListButton;
