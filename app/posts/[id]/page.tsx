"use client";
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { posts } from "@/data/posts";
import CommentSection from "@/components/comment";
const Post = () => {
    const { id } = useParams();
  
    // Convert id to string if it is an array, or use it directly if it's a single string
    const postId = Array.isArray(id) ? id[0] : id;
    
    // Find the post using the postId
    const post = posts.find((post) => post.id === parseInt(postId || ''));
  
    if (!post) {
      return <h1>Post not found</h1>;
    }
  return (
    <>
      <Navbar />
      <main className=" min-h-screen flex items-center justify-center bg-[#F5F5DC]">
        <div className=" flex flex-col">
          <h1 className=" text-center text-xl md:text-3xl lg:text-5xl text-[#800000]">{post.title}</h1>
          <p className=" text-sm text-center md:text-lg lg:text-xl p-4 md:p-8 text-balance">{post.body}</p>
          <CommentSection />
        </div>
      </main>
    </>
  );
};

export default Post;
