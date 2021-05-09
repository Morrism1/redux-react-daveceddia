import { connect } from 'react-redux';
import { addCourse, openNewCourseModal, closedNewCourseModal } from '../actions/index';
import Modal from 'react-modal';
import NewCourse from '../components/NewCourse';
import './courseListsPage.css'
import { Link } from '@reach/router';
import Loading from '../components/Loading';

function CourseListsPage({ courses, coursesLoading, coursesError, openNewCourseModal, isModalOpen, closedNewCourseModal }) {

  if (coursesLoading) {
    return <Loading />
  }
  if (coursesError) {
    return <div>{coursesError.message}</div>
  }
  return courses.length === 0 ? (
    <div className="CreateCourse">
      <NewCourse />
    </div>
  ) : (
    <div className="CourseList">
      <h1>Your Courses</h1>
      <button className="new-course-btn" onClick={openNewCourseModal}>New Course</button>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <div className="title">{course.name}</div>
              <div className="price">{`$ ${course.price}.00`}</div>
            </Link>
          </li>

        ))}
      </ul>
      <Modal isOpen={isModalOpen} onRequestClose={closedNewCourseModal}>
        <NewCourse />
      </Modal>
    </div>
  );
}

const mapState = (state) => ({
  courses: state.courses,
  loading: state.saveInProgress,
  error: state.saveError,
  coursesLoading: state.coursesLoading,
  coursesError: state.coursesError,
  isModalOpen: state.newCourseModalOpen
});

export default connect(mapState, { addCourse, openNewCourseModal, closedNewCourseModal })(CourseListsPage);
