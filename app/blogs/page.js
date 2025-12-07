"use client";

import Image from "next/image";
import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../compnents/cardA";
import Footer from "../compnents/Footer";

export default function Blogs() {
  const [featured, ...rest] = eventsData;

  return (
    <>
      <NavBar />

      {/* Hero section */}
      <div className="w-full h-[400px] relative mt-[60px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="Blogs hero"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-bold">Blogs</h1>
          <h2 className="text-white text-2xl font-extrabold mt-3">
            Dive into articles, insights, and updates from our community.
          </h2>
        </div>
      </div>

      {/* Blogs grid like SOSC */}
      <section className="max-w-6xl mx-auto py-12 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: big featured post */}
          {featured && (
            <div className="lg:col-span-2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md overflow-hidden cursor-pointer">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-600">{featured.date}</p>
                <h2 className="text-3xl font-bold mt-2 text-emerald-500 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-sm text-gray-700 mt-3">
                  By {featured.author}
                </p>
                {/* Optional short description if you have it in data */}
                {featured.description && (
                  <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                    {featured.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Right: smaller cards list */}
          <div className="flex flex-col gap-6">
            {rest.map((event) => (
              <CardA
                key={event.id}
                title={event.title}
                date={event.date}
                image={event.image}
                author={event.author}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
