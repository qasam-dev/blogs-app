import { useEffect, useState } from "react";
import { Footer, Header } from "../components"
import { useDispatch } from "react-redux";
import authService from "../app/services/auth";
import { login, logout } from "../helpers/authSlice/authSlice";
import { Outlet, } from "react-router";
import { Box } from "../components/Elements";

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
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <Box style={{ marginTop: "85px" }}>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}

export default Layout