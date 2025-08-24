import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 bg-gray-50 min-h-screen">
            <Container>
                {/* Post Image */}
                <div className="relative w-full flex justify-center mb-8">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
                    />

                    {/* Edit/Delete Buttons */}
                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-600 hover:bg-green-700 shadow-md">
                                    ✏️ Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-600 hover:bg-red-700 shadow-md"
                                onClick={deletePost}
                            >
                                🗑️ Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Post Content */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        {post.title}
                    </h1>
                    <p className="text-gray-500 text-sm mb-8">
                        Posted by <span className="font-medium">{post.username || "Author"}</span>
                    </p>

                    <div className="prose prose-lg text-left mx-auto text-gray-800 leading-relaxed">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : (
        <div className="flex justify-center items-center min-h-screen text-gray-600">
            Loading post...
        </div>
    );
}
