import axios from "axios"

export const courseCreate = async (name, price) => {
  const data = await axios({
    method: 'POST',
    url: '/courses',
    data: { name: name, price: price }
  })

  return data.data
}

export const getCourses = async () => {
  const data = await axios.get('/courses').then(res => res)

  return data.data
}