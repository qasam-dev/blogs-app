import { Link } from "react-router"
import { Box, HeadingStyle } from "../Elements"
import appwriteService from '../../app/services/post'
const PostCard = ({ $id, title, featuredImage }) => {
    const featuredImg = appwriteService.getFilePreview(featuredImage);
    return (
        <Box>
            <Link to={`/post/${$id}`}>
                <Box className='w-full bg-gray-100 rounded-xl p-4'>
                    <Box className='w-full justify-center mb-4'>
                        <img src={featuredImg} alt={title} className='rounded-xl' />
                    </Box>
                    <HeadingStyle size='28px' className='text-xl font-bold'>{title}</HeadingStyle>
                </Box>
            </Link>
        </Box>
    )
}

export default PostCard