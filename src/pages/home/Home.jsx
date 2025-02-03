import { useEffect, useState } from 'react'
import { Container, PostCard } from '../../components'
import { Box } from '../../components/Elements';
import postService from '../../app/services/post';
import Banner from './Banner';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAllPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
    }, [])

    if (posts.length === 0) {
        return (
            <Box className="w-full">
                <Container>
                    <Box className="flex flex-wrap">
                        <Box className="p-2 w-full">
                            <Banner />
                        </Box>
                    </Box>
                </Container>
            </Box>
        )
    }
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

export default Home