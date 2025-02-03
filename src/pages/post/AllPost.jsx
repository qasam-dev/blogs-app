import { useEffect, useState } from "react"
import { Container, PostCard } from "../../components"
import postService from "../../app/services/post"
import { Box } from "../../components/Elements"

const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    postService.getAllPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <Box className='w-full py-8'>
            <Container>
                <Box className='flex flex-wrap'>
                    {posts.map((post) => (
                        <Box key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default AllPost