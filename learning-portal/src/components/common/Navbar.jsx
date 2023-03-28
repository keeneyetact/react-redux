import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import LearningPortal from '../../assets/image/learningportal.svg'
import { userLoggedOut } from '../../features/auth/authSlice'

const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth)

    const isAdmin = location.pathname.includes('/admin');

    const logout = (e) => {
        e.preventDefault()
        dispatch(userLoggedOut())
        localStorage.clear()
        if(isAdmin) navigate('/admin')
        else navigate('/')
    }

  return (
    <div className="shadow-md">
        <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
            <img className="h-10" src={LearningPortal} alt="" />
            <div className="flex items-center gap-3">
                {isAdmin ? <h2 className="font-bold">{user?.name}</h2> :
                <>
                <Link to="/course-player" >Course</Link>
                <Link to="/leaderboard" >Leaderboard</Link>
                <h2 className="font-bold">{user?.name}</h2>
                </>}
                {isAdmin ? <button onClick={logout}
                    className="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Logout
                </button> : 
                <button onClick={logout}
                className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Logout
            </button>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
