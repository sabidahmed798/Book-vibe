import React from "react";
import Image from "next/image";

import banner from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Banner Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 p-6 shadow-xl md:p-10 lg:p-14">
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* Left Side */}
            <div className="space-y-6">
              {/* Small Badge */}
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                📚 Discover Your Next Favorite Book
              </span>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Books to
                <span className="text-emerald-600"> freshen up </span>
                your bookshelf
              </h1>

              {/* Description */}
              <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                Explore a world of amazing books, discover new stories, and
                build a collection that truly represents you.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 pt-2">
                <button
                  className="
                    btn border-0 bg-emerald-600 px-7 text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-emerald-700
                    hover:shadow-xl
                  "
                >
                  View The List →
                </button>

                <button
                  className="
                    btn btn-outline border-slate-300 px-7 text-slate-700
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-600
                    hover:bg-emerald-50
                    hover:text-emerald-700
                  "
                >
                  Explore Books
                </button>
              </div>

              {/* Statistics */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">1000+</h3>
                  <p className="text-sm text-slate-500">Books</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">500+</h3>
                  <p className="text-sm text-slate-500">Readers</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">50+</h3>
                  <p className="text-sm text-slate-500">Authors</p>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center md:justify-end">
              <div className="group relative">
                {/* Image Glow */}
                <div
                  className="
                    absolute inset-0
                    rounded-[2.5rem]
                    bg-emerald-400/20
                    blur-2xl
                    transition-all duration-500
                    group-hover:bg-emerald-400/40
                  "
                />

                {/* Image Container */}
                <div
                  className="
                    relative overflow-hidden
                    rounded-[2rem]
                    border-8 border-white
                    shadow-2xl
                    transition-all duration-500
                    group-hover:-translate-y-3
                    group-hover:rotate-1
                    group-hover:shadow-emerald-200/60
                  "
                >
                  <Image
                    src={banner}
                    width={500}
                    height={500}
                    alt="Books banner"
                    priority
                    className="
                      h-auto w-full max-w-md
                      rounded-[1.5rem]
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
