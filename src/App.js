// @ts-nocheck
import './App.css';
import CourseListsPage from './pages/CourseListsPage';
import { Router, Redirect } from '@reach/router'
import CourseDetailsPage from './pages/CourseDetailsPage';

function App() {
  return (
    <Router>
      <Redirect noThrow from="/" to="/courses" />
      <CourseListsPage path="/courses" />
      <CourseDetailsPage path="/courses/:courseId" />
    </Router>

  );
}

export default App;
