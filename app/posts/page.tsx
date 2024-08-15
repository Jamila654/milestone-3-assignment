"use client";
import Link from "next/link";
import { posts } from "@/data/posts";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Posts = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F5DC] p-10 mt-10 sm:p-20 md:p-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
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
      </main>
    </>
  );
};

export default Posts;
