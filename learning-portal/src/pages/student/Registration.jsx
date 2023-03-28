import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import LearningPortal from '../../assets/image/learningportal.svg'
import Error from '../../components/common/Error';
import { useRegisterMutation } from '../../features/auth/authApi';

const Registration = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const [register, {data: registerData, isLoading, error: registerError}] = useRegisterMutation()

    useEffect(()=> {
        if(registerError?.data) setError(registerError.data)

        if(registerData?.accessToken && registerData?.user) navigate("/courses")

    },[registerData, registerError, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()

        setError("")

        if(password !== confirmPassword) {
            setError("Please, enter same password...")
        } else {
        register({
            name,
            email,
            password,
            role: 'student'
        }) 
    }
    }


  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
        <div className="mx-auto max-w-md px-5 lg:px-0">
            <div>
                <img className="h-12 mx-auto" src={LearningPortal} alt="" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Create Your New Account
                </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="name" className="sr-only">Name</label>
                        <input id="name" name="name" type="name" autoComplete="name" required
                            value={name} onChange={(e) => setName(e.target.value)}
                            className="login-input rounded-t-md" placeholder="Student Name" />
                    </div>
                    <div>
                        <label for="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="login-input " placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                            value={password} onChange={(e)=> setPassword(e.target.value)}
                            className="login-input" placeholder="Password" />
                    </div>
                    <div>
                        <label for="confirm-password" className="sr-only">Confirm Password</label>
                        <input id="confirm-password" name="confirm-password" type="password"
                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="confirm-password" required className="login-input rounded-b-md"
                            placeholder="Confirm Password" />
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <Link to="/" className="font-medium text-violet-600 hover:text-violet-500">
                            Already Have Acocunt ? Log In!
                        </Link>
                    </div>
                </div>

                <div>
                    <button type="submit" disabled={isLoading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Create Account
                    </button>
                </div>

                {error !== "" && <Error message={error} />}
            </form>
        </div>
    </section>
  )
}

export default Registration