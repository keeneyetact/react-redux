import { Routes, Route, useLocation } from 'react-router-dom'

import AdminRoute from './utils/AdminRoute';
import PublicRoute from './utils/PublicRoute';
import StudentRoute from './utils/StudentRoute';

// Common pages
import Login from './pages/Login';
import Navbar from './components/common/Navbar';

// Student Pages
import CoursePlayer from './pages/student/CoursePlayer';
import Leaderboard from './pages/student/Leaderboard';
import Quiz from './pages/student/Quiz';
import StudentRegistration from './pages/student/Registration';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import AddAssignment from './pages/admin/Assignment';
import AssignmentMark from './pages/admin/AssignmentMark';
import Quizzes from './pages/admin/Quizzes';
import Videos from './pages/admin/Videos';
import useAuthCheck from './hooks/useAuthCheck';

function App () {
  // Upadting redux store from localstorage
  const authChecked = useAuthCheck();
  
  // Use the useLocation hook to get the current path
  const location = useLocation();

  // Hide Navbar from login, registration, and admin login pages
  const hideNavbar =
    location.pathname === '/' ||
    location.pathname === '/registration' ||
    location.pathname === '/admin';

  return ( !authChecked ? 
    <div>Checking authenticated....</div> 
    :
    <>
      {!hideNavbar && <Navbar />}
      <Routes>

        {/* Student Routes */}
        <Route path="/" element={ <PublicRoute> <Login /> </PublicRoute> } />
        <Route path="/registration" element={ <PublicRoute> <StudentRegistration /> </PublicRoute> } />
        <Route path='/courses' element={ <StudentRoute> <CoursePlayer /> </StudentRoute> } />
        <Route path='/leaderboard' element={ <StudentRoute> <Leaderboard /> </StudentRoute> } />
        <Route path='/quiz' element={ <StudentRoute> <Quiz /> </StudentRoute> } />

        {/* Admin Routes */}
        <Route path='/admin' element={ <PublicRoute> <Login /> </PublicRoute> } />
        <Route path='/admin/dashboard' element={ <AdminRoute> <Dashboard /> </AdminRoute> } />
        <Route path='/admin/assignment' element={ <AdminRoute> <AddAssignment /> </AdminRoute> } />
        <Route path='/admin/assignment-mark' element={ <AdminRoute> <AssignmentMark /> </AdminRoute> } />
        <Route path='/admin/quizzes' element={ <AdminRoute> <Quizzes /> </AdminRoute> } />
        <Route path='/admin/videos' element={ <AdminRoute> <Videos /> </AdminRoute> } />

      </Routes>
    </>
  );
}

export default App;
