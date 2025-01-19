"use client";
import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPost = async () => {
    try {
      setIsLoading(true);
      const results = await fetch(
        "https://first-backend-to4o.onrender.com/lists"
      );
      const posts = await results.json();
      setAllPosts(posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <h1 className="text-5xl">All Arcticles</h1>
      <hr />
      <div className="flex flex-col my-5 justify-center items-center">
        {isLoading ? (
          <div className=" animate-spin border-4 border-b-blue-600 rounded-full border-white w-10 h-10"></div>
        ) : (
          allPosts.map((post) => {
            return (
              <div className="mb-5 border-b" key={post.id}>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="bg-slate-200/20">{post.body}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BlogList;
