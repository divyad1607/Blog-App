import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            ✍️ Create a New Post
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Share your thoughts, tutorials, or stories with the world.
          </p>
          
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
