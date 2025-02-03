import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router"
import { Box } from "../Elements";
import { ClipLoader } from "react-spinners";

export const Protected = ({ children, authentication = true }) => {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            // agr dono ture nhi to login nhi huga  
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            // agr done true hain to user active ho ga means ky login ho jaiy ga 
            navigate('/')
        }
        setLoader(false)

    }, [authStatus, navigate, authentication])
    return loader ? <Box className="w-full h-screen flex justify-center items-center"><ClipLoader color="#000" size={50} /></Box> : <Box>{children}</Box>

}