import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Student Pages
import CoursePlayer from './student/pages/CoursePlayer';
import Leaderboard from './student/pages/Leaderboard';
import StudentLogin from './student/pages/Login';
import Quiz from './student/pages/Quiz';
import StudentRegistration from './student/pages/Registration';

// Admin Pages
import AdminLogin from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import AddAssignment from './admin/pages/Assignment';
import AssignmentMark from './admin/pages/AssignmentMark';
import Quizzes from './admin/pages/Quizzes';
import Videos from './admin/pages/Videos';

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
