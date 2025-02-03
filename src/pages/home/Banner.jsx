
import styled from 'styled-components'
import { Box, HeadingStyle } from '../../components/Elements'


const Banner = () => {
    return (
        <BannerWapper className='container-fluid bg-theme-color' >
            <Box className='banner-wapper-card'>
                <Box className="flex flex-col md:flex-row items-center">
                    <Box className="flex flex-col justify-center">
                        <Box className="flex flex-col uppercase">
                            <HeadingStyle className="text-[20px] font-bold text-white tracking-[7px]" >
                                Login to read posts
                            </HeadingStyle>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BannerWapper>
    )
}
const BannerWapper = styled.section`
    position: relative;
    .banner-wapper-card{
        justify-content: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-top: 75px;
    }
    .banner-card{
        padding-top:70px;
        display: flex !important;
        // align-items: center;
        justify-content: space-between;
    }
    .banner-text-card{
        display: flex;
        flex-direction: column;
    }
    .scrollDown{
        position: absolute;
        bottom: 10px;
        right: 0;
        left: 0;
        margin: auto;
    }
`

export default Banner
