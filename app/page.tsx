"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F5DC]">
        <section id="/">
          <div className=" flex flex-col items-center justify-center min-h-screen text-center p-2 md:p-7 gap-2">
            <p className=" text-md md:text-2xl text-balance">
              Explore new ideas, or simply enjoy a well-crafted article, we
              invite you to join us on this enriching journey. Dive in and
              discover a world of knowledge and inspiration!
            </p>
            <button className=" bg-orange-950 text-white rounded-full p-2 hover:opacity-75">
              <a href="#about">Read More</a>
            </button>
          </div>
        </section>
        <section id="about">
          <div className=" min-h-screen flex items-center justify-center">
            <div className=" flex flex-col">
              <h1 className=" text-center text-xl md:text-3xl lg:text-5xl text-[#800000]">
                About
              </h1>
              <p className=" text-sm text-center md:text-lg lg:text-xl p-4 md:p-8">
                Welcome to our blog, where passion meets insight! Here, we
                explore a diverse range of topics, from the latest trends and
                timeless wisdom to personal stories and expert advice. Our goal
                is to create a space where curiosity thrives and readers find
                inspiration and valuable perspectives. Whether you're seeking
                practical tips, thought-provoking articles, or just a good read,
                our carefully curated content is designed to engage, inform, and
                entertain. Join us on this journey of discovery and enrich your
                life with every visit. Thank you for being part of our
                community!
              </p>
            </div>
          </div>
        </section>
        <section id="blog">
          <div className=" min-h-screen flex flex-col gap-5 items-center justify-center lg:p-7 p-8 md:p-16">
          <h1 className=" text-center text-xl md:text-3xl lg:text-5xl text-[#800000]">
                Blog
              </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0,3).map((post) => (
            <div
              key={post.id}
              className="card border-8 rounded-md border-white bg-white shadow-lg flex flex-col items-center"
            >
              <Image
                src={post.image || '/images/placeholder.jpg'}
                alt="Post Image"
                className="rounded-md"
                width={286}
                height={180}
                layout="responsive"
              />
              <div className="card-body p-4 flex flex-col justify-between">
                <h5 className=" text-sm md:text-md font-bold mb-2 text-nowrap">
                  {post.title}
                </h5>
                <p className="text-gray-700 mb-4">
                  {post.body.substring(0, 100)}...
                </p>
                <Link href={`/posts/${post.id}`} className=" text-center hover:text-orange-950">
                  {"Read More ->"}
                </Link>
              </div>
            </div>
            
          ))}
         
          
        </div>
        <button className=" bg-orange-950 text-white rounded-full  p-2 text-nowrap hover:opacity-75 flex items-center justify-center">
            <Link href="/posts">Find Out More</Link>
          </button>
        </div>
        </section>
        </main>
        </>

  );
}
