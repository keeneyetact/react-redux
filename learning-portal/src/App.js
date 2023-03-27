import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Student Pages
import CoursePlayer from './pages/student/CoursePlayer';
import Leaderboard from './pages/student/Leaderboard';
import StudentLogin from './pages/student/Login';
import Quiz from './pages/student/Quiz';
import StudentRegistration from './pages/student/Registration';

// Admin Pages
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AddAssignment from './pages/admin/Assignment';
import AssignmentMark from './pages/admin/AssignmentMark';
import Quizzes from './pages/admin/Quizzes';
import Videos from './pages/admin/Videos';

function App() {
  return (
    <Router>
      <Routes>

        {/* Student Routes */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/registration" element={<StudentRegistration />} />
        <Route path='/course-player' element={<CoursePlayer />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/quiz' element={<Quiz />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/assignment' element={<AddAssignment />} />
        <Route path='/admin/assignment-mark' element={<AssignmentMark />} />
        <Route path='/admin/quizzes' element={<Quizzes />} />
        <Route path='/admin/videos' element={<Videos />} />

      </Routes>
    </Router>
  );
}

export default App;
