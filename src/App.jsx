
import { Outlet } from "react-router"
import { Footer, Header } from "./components"
import { Box } from "./components/Elements"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./app/services/auth";
import { login, logout } from "./helpers/authSlice/authSlice";
import { ClipLoader } from "react-spinners";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }))
  //         console.log("user exits here");
  //       } else {
  //         dispatch(logout())
  //         console.log("user Not exits at this moment");
  //       }
  //     })
  //     .finally(() => setLoading(false))

  // }, [])

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
          console.log("User exists here");
        } else {
          dispatch(logout());
          console.log("User does not exist at this moment");
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [dispatch]);
  if (loading) return <Box className="w-full h-screen flex justify-center items-center"><ClipLoader color="#000" size={50} /></Box>;


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

export default App
