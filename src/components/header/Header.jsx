
import { Box } from '../Elements'
import { Container } from '../../components'
import { useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router'
import LogoutBtn from "./LogoutBtn"

const Header = () => {
    const authStatus = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]


    return (
        <header className="p-3 shadow bg-bg-color">
            <Container>
                <nav className="flex">
                    <Box className="me-4">
                        <Link to="/">
                            {/* <Logo width="70px" /> */}
                        </Link>
                    </Box>
                    <ul className="flex ms-auto list-unstyled">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className=''>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="btn btn-light px-4 py-2 rounded-pill cursor-pointer"
                                    >
                                        {item.name}
                                    </button>
                                </li>

                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}


export default Header

