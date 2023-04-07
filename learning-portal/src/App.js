import { Routes, Route, useLocation } from 'react-router-dom'

import AdminRoute from './utils/AdminRoute';
import PublicRoute from './utils/PublicRoute';
import StudentRoute from './utils/StudentRoute';
import useAuthCheck from './hooks/useAuthCheck';

// Common pages
import Login from './pages/Login';
import Navbar from './components/common/Navbar';

// Student Pages
import Courses from './pages/student/Courses';
import QuizPage from './pages/student/QuizPage';
import Leaderboard from './pages/student/Leaderboard';
import StudentRegistration from './pages/student/Registration';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Assignments from './pages/admin/assignment/Assignments';
import AddAssignment from './pages/admin/assignment/AddAssignment';
import AssignmentMark from './pages/admin/assignment/AssignmentMark';
import Quizzes from './pages/admin/quiz/Quizzes';
import Videos from './pages/admin/video/Videos';
import AddVideo from './pages/admin/video/AddVideo';
import EditVideo from './pages/admin/video/EditVideo';
import EditAssignment from './pages/admin/assignment/EditAssignment';
import AddQuiz from './pages/admin/quiz/AddQuiz';
import EditQuiz from './pages/admin/quiz/EditQuiz';

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
        <Route path='/courses' element={ <StudentRoute> <Courses /> </StudentRoute> } />
        <Route path='/leaderboard' element={ <StudentRoute> <Leaderboard /> </StudentRoute> } />
        <Route path='/quiz/:videoId' element={ <StudentRoute> <QuizPage /> </StudentRoute> } />

        {/* Admin Routes */}
        <Route path='/admin' element={ <PublicRoute> <Login /> </PublicRoute> } />
        <Route path='/admin/dashboard' element={ <AdminRoute> <Dashboard /> </AdminRoute> } />
        <Route path='/admin/assignments' element={ <AdminRoute> <Assignments /> </AdminRoute> } />
        <Route path='/admin/assignment/add' element={ <AdminRoute> <AddAssignment /> </AdminRoute> } />
        <Route path='/admin/assignment/edit/:id' element={ <AdminRoute> <EditAssignment /> </AdminRoute> } />
        <Route path='/admin/assignment-mark' element={ <AdminRoute> <AssignmentMark /> </AdminRoute> } />
        <Route path='/admin/quizzes' element={ <AdminRoute> <Quizzes /> </AdminRoute> } />
        <Route path='/admin/quizzes/add' element={ <AdminRoute> <AddQuiz /> </AdminRoute> } />
        <Route path='/admin/quizzes/edit/:quizId' element={ <AdminRoute> <EditQuiz /> </AdminRoute> } />
        <Route path='/admin/videos' element={ <AdminRoute> <Videos /> </AdminRoute> } />
        <Route path='/admin/videos/add' element={ <AdminRoute> <AddVideo /> </AdminRoute> } />
        <Route path='/admin/videos/edit/:id' element={ <AdminRoute> <EditVideo /> </AdminRoute> } />

      </Routes>
    </>
  );
}

export default App;
