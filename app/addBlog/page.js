"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import addBlogStyles from "./addBlog.module.css";
import nextConfig from '../../next.config.mjs';

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      alert("Title, description and author are required.");
      return;
    }

    try {
      const res = await fetch(`api/blog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, content, author}),
      });

      if (res.ok) {
        router.push("/blog");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${addBlogStyles.addBlogForm}`}>
      <input onChange={(e) => setTitle(e.target.value)}
        value={title} className="border border-slate-500 px-8 py-2"
        type="text" placeholder="Blog Title" maxLength={50}
      />

      <input onChange={(e) => setDescription(e.target.value)}
        value={content} className="border border-slate-500 px-8 py-2"
        type="text" placeholder="Blog Description" maxLength={400}
      />

      <input onChange={(e) => setAuthor(e.target.value)}  value={author} className="border border-slate-500 px-8 py-2"
        type="text" placeholder="Blog Author" maxLength={50}
      />

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add Blog
      </button>
    </form>
  );
}
