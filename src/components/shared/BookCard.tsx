import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Book Image */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-pink-600 shadow-md">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Book Content */}
      <div className="p-5">
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition group-hover:text-pink-600">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Book Information */}
        <div className="mt-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 line-clamp-1 text-sm font-semibold text-gray-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Tags</p>

            <div className="mt-1 flex flex-wrap gap-1">
              {book.tags?.slice(0, 2).map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md bg-pink-50 px-2 py-0.5 text-[11px] font-medium text-pink-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Book ID</p>
            <p className="text-sm font-bold text-gray-800">#{book.bookId}</p>
          </div>
          <Link href={`/books/${book.bookId}`}>
            <button className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg">
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
