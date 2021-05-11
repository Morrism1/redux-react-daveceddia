import axios from "axios"

const PREFIX = "/api"
export const courseCreate = async (name, price) => {
  const data = await axios({
    method: 'POST',
    url: PREFIX + '/courses',
    data: { name: name, price: price }
  })

  return data.data
}

export const lessonCreate = async (name, courseId) => {
  const data = await axios({
    method: 'POST',
    url: PREFIX + '/lessons',
    data: { name: name, courseId: courseId }
  })

  return data.data
}

export const getCourses = async () => {
  const data = await axios.get(PREFIX + '/courses').then(res => res)

  return data.data
}

export const getLessons = async (courseId) => {
  const data = await axios.get(PREFIX + '/lessons?courseId=' + courseId).then(res => res)

  return data.data
}

export const updateLesson = async (lesson) => {
  const res = await axios.put(PREFIX + `/lessons/${lesson.id}`, lesson)
  return res.data.json()
}