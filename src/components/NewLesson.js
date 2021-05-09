import React, { useState, useRef, useEffect } from 'react';
import './NewLesson.css';
import { connect } from 'react-redux';
import { addLesson } from '../actions/index';

function NewLesson({ addLesson, courseId }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const inputRef = useRef()
  const reset = () => {
    setTitle('')
    setEditing(false)
  }
  const commitEdit = e => {
    e.preventDefault()
    addLesson(title, courseId)
    reset()
  }

  useEffect(() => {
    if (editing) {
      // @ts-ignore
      inputRef.current.focus()
    }
  }, [editing])

  return editing ? (
    <form className="add-lesson-button editing" onSubmit={commitEdit}>
      <input ref={inputRef} value={title} onBlur={reset} onChange={e => setTitle(e.target.value)} placeholder="Name the Lesson" />
    </form>
  ) : (
    <button className="add-lesson-button" onClick={() => setEditing(true)}>New Lesson</button>
  );
}

export default connect(null, { addLesson })(NewLesson)

