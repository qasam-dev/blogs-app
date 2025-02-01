import { useDispatch } from "react-redux"
import authService from "../../app/services/auth"
import { logout } from "../../helpers/authSlice/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandle = () => {
        authService.logOut().then(() => {
            dispatch(logout())
        })

    }
    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandle} >Logout</button>

    )
}

export default LogoutBtn