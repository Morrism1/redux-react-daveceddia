import { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/index';
import './courseListsPage.css'

function CourseListsPage({ courses, addCourse, loading,
  error, coursesLoading, coursesError }) {
  const [courseName, setCourseName] = useState('');
  const [coursePrice, setCoursePrice] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    addCourse(courseName, coursePrice)
  }
  if (coursesLoading) {
    return <div>loading...</div>
  }
  if (coursesError) {
    return <div>{coursesError.message}</div>
  }
  return courses.length === 0 ? (
    <div className="CreateCourse">
      <h1>Create your first course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick a name:
          <input
            disabled={loading}
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />

          {error && (
            <div className="error-message">
              Error: {error.message}
            </div>
          )}
        </label>
        <label>
          Put a Price:
          <input
            disabled={loading}
            value={coursePrice}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => setCoursePrice(e.target.value)}
          />
        </label>
        <button type='submit' disabled={loading}>Create Course</button>
      </form>
    </div>
  ) : (
    <div className="CourseList">
      <h1>Your Courses</h1>
      <button className="new-course-btn">New Course</button>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <div className="title">{course.name}</div>
            <div className="price">{`$ ${course.price}.00`}</div>
          </li>

        ))}
      </ul>
    </div>
  );
}

const mapState = (state) => ({
  courses: state.courses,
  loading: state.saveInProgress,
  error: state.saveError,
  coursesLoading: state.coursesLoading,
  coursesError: state.coursesError
});

export default connect(mapState, { addCourse })(CourseListsPage);
