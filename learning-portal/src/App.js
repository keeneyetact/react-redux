import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoursePlayer from './pages/student/CoursePlayer';
import Leaderboard from './pages/student/Leaderboard';
import StudentLogin from './pages/student/Login';
import Quiz from './pages/student/Quiz';
import StudentRegistration from './pages/student/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/registration" element={<StudentRegistration />} />
       <Route path='/course-player' element={<CoursePlayer />} />
       <Route path='/leaderboard' element={<Leaderboard />} />
       <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
