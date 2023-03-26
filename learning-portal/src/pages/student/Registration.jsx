import React from 'react'
import { Link } from 'react-router-dom'
import LearningPortal from '../../assets/image/learningportal.svg'

const Registration = () => {
  return (
    <section class="py-6 bg-primary h-screen grid place-items-center">
        <div class="mx-auto max-w-md px-5 lg:px-0">
            <div>
                <img class="h-12 mx-auto" src={LearningPortal} alt="" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Create Your New Account
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="name" class="sr-only">Name</label>
                        <input id="name" name="name" type="name" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="Student Name" />
                    </div>
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required
                            class="login-input " placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            class="login-input" placeholder="Password" />
                    </div>
                    <div>
                        <label for="confirm-password" class="sr-only">Confirm Password</label>
                        <input id="confirm-password" name="confirm-password" type="password"
                            autocomplete="confirm-password" required class="login-input rounded-b-md"
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
                    <button type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Registration