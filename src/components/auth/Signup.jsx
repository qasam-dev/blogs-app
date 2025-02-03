import { Box, Button, HeadingStyle, InputStyle, Span, TextStyle } from "../Elements"
import { Link, useNavigate } from "react-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import authService from "../../app/services/auth"
import { login as authLogin } from '../../helpers/authSlice/authSlice'

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const createAccount = async (data) => {
        setError('')
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <Box className="flex items-center justify-center">
            <Box className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <Box className="mb-2 flex justify-center">
                    <Span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </Span>
                </Box>
                <HeadingStyle className="text-center text-2xl font-bold leading-tight">Sign up to create account</HeadingStyle>
                <TextStyle className="mt-2 text-center text-base text-black/60">
                    Already have an account?
                    <Link to="/login" className=" ms-1 font-medium text-primary transition-all duration-200 hover:underline">
                        Sign In
                    </Link>
                </TextStyle>
                {error && <TextStyle className="text-red-600 mt-8 text-center">{error}</TextStyle>}

                <form onSubmit={handleSubmit(createAccount)}>
                    <Box className='space-y-5'>
                        <InputStyle
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <InputStyle
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <InputStyle
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </Box>
                </form>
            </Box>

        </Box>
    )
}

export default Signup