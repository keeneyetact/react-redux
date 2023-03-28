import { Routes, Route, useLocation } from 'react-router-dom'

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

function App() {

  // Use the useLocation hook to get the current path
  const location = useLocation();

  // Hide Navbar from login, registration, and admin login pages
  const hideNavbar =
    location.pathname === '/' ||
    location.pathname === '/registration' ||
    location.pathname === '/admin';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>

        {/* Student Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<StudentRegistration />} />
        <Route path='/courses' element={<CoursePlayer />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/quiz' element={<Quiz />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/assignment' element={<AddAssignment />} />
        <Route path='/admin/assignment-mark' element={<AssignmentMark />} />
        <Route path='/admin/quizzes' element={<Quizzes />} />
        <Route path='/admin/videos' element={<Videos />} />

      </Routes>
    </>
  );
}

export default App;
