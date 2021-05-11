import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import './CourseDetailPage.css';
import Loading from '../components/Loading';
import NewLesson from '../components/NewLesson';
import { getCoursesById, getLessonsByCourse } from '../selectors';
import { loadLessons } from '../actions/index';

function CourseDetailsPage({ courseId, course, loading, lessons, loadLessons }) {

  useEffect(() => {
    loadLessons(course.id)
  }, [course])

  if (loading) {
    return <Loading />;
  }

  if (!course) {
    return <NotFoundPage />;
  }

  return (
    <div className="CourseDetail">
      <header>
        <h1>{course.name}</h1>
      </header>
      <div className="content">
        <div className="sidebar">
          {lessons.length > 0 && (
            <ul className="lessons">
              {lessons.map(lesson => (
                <li key={lesson.id}>
                  <div className="lesson-item">
                    {lesson.name}
                  </div>
                </li>
              ))}
            </ul>
          )}
          <NewLesson courseId={course.id} />
        </div>
        <div className="lesson" />
      </div>
    </div>
  );
}

const mapToState = (state, ownProps) => {
  const CourseId = parseInt(ownProps.courseId, 10);
  return {
    loading: state.courses.coursesLoading,
    // @ts-ignore
    lessons: getLessonsByCourse(state, ownProps),
    // @ts-ignore
    course: getCoursesById(state, ownProps),
  };
};

export default connect(mapToState, { loadLessons })(CourseDetailsPage);
