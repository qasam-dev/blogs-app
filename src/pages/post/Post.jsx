
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Container } from "../../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { Box, Button } from "../../components/Elements";
import postService from "../../app/services/post";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            postService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        postService.deletePost(post.$id).then((status) => {
            if (status) {
                postService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <Box className="py-8">
            <Container>
                <Box className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={postService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <Box className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </Box>
                    )}
                </Box>
                <Box className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </Box>
                <Box className="browser-css">
                    {parse(post.content)}
                </Box>
            </Container>
        </Box>
    ) : null;
}