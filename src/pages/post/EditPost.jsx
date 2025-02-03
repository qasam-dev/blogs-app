import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import postService from "../../app/services/post"
import { Container, PostForm } from "../../components"

const EditPost = () => {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            postService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPosts(post)
                    }
                })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
