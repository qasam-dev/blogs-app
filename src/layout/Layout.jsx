import { useEffect, useState } from "react";
import { Footer, Header } from "../components"
import { useDispatch } from "react-redux";
import authService from "../app/services/auth";
import { login, logout } from "../helpers/authSlice/authSlice";
import { Outlet, } from "react-router";
import { Box } from "../components/Elements";
import { Ripple } from "react-awesome-spinners";

function Layout() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }))
                    console.log("user exits here");
                } else {
                    dispatch(logout())
                    console.log("user Not exits at this moment");
                }
            })
            .finally(() => setLoading(false))

    }, [])
    if (loading) return <Box className="w-full h-screen flex justify-center items-center"><Ripple /></Box>;

    return (
        <>
            <Header />
            <Box>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}

export default Layout