"use client";
import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const getPost = async () => {
    try {
      const results = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await results.json();
      setAllPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <h1 className="text-5xl">All Arcticles</h1>
      <hr />
      <div className="flex flex-col my-5">
        {allPosts.map((post) => {
          return (
            <div className="mb-5 border-b" key={post.id}>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="bg-slate-200/20">{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
