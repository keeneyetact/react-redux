import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LearningPortal from '../../assets/image/learningportal.svg'
import Error from '../../components/comon/Error'
import { useLoginMutation } from '../../features/auth/authApi'

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { data: loginData, error: loginError}] = useLoginMutation()
   
    useEffect(()=> {
        if(loginError?.data) setError(loginError.data)

        if(loginData?.accessToken && loginData?.user) navigate("/courses")

    },[loginData, loginError, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()

        setError("")

        login({
            email,
            password
        })
    }

  return (
    <div className="py-6 bg-primary h-screen grid place-items-center">
        <div className="mx-auto max-w-md px-5 lg:px-0">
            <div>
                <img className="h-12 mx-auto" src={LearningPortal} alt="" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Sign in to Student Account
                </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required
                               value={email} onChange={(e)=> setEmail(e.target.value)}
                               className="login-input rounded-t-md" placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                               value={password} onChange={(e)=> setPassword(e.target.value)}
                               className="login-input rounded-b-md" placeholder="Password" />
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <Link to="/registration" className="font-medium text-violet-600 hover:text-violet-500">
                            Create New Account
                        </Link>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Sign in
                    </button>
                </div>

                {error !== "" && <Error message={error} />}
            </form>
        </div>
    </div>

  )
}

export default Login