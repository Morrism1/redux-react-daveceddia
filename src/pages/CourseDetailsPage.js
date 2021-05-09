import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import './CourseDetailPage.css';
import Loading from '../components/Loading';
import NewLesson from '../components/NewLesson';

function CourseDetailsPage({ courseId, course, loading, lessons }) {
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
            <ul>
              {lessons.map(lesson => (
                <li key={lesson.id}>{lesson.name}</li>
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
    loading: state.coursesLoading,
    lessons: state.lessons.filter(lesson => lesson.courseId === CourseId),
    course: state.courses.find((c) => c.id === CourseId),
  };
};

export default connect(mapToState)(CourseDetailsPage);
