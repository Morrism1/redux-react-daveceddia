// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/index';
import './NewCourse.css'

function NewCourse({ addCourse, loading,
  error }) {
  const [courseName, setCourseName] = useState('');
  const [coursePrice, setCoursePrice] = useState('')
  const inputRef = useRef()
  const handleSubmit = e => {
    e.preventDefault();
    addCourse(courseName, coursePrice)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div className="NewCourse">
      <h1>Create your first course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick a name:
          <input
            ref={inputRef}
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
  )
}

const mapState = (state) => ({
  courses: state.courses,
  loading: state.saveInProgress,
  error: state.saveError
})

export default connect(mapState, { addCourse })(NewCourse)
