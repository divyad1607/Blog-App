import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          No posts available
        </h1>
        <p className="text-gray-500 mb-6">
          {`Looks like there's nothing here yet. `}
          <span className="font-medium">Login or create a post!</span>
        </p>
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Latest Posts
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
