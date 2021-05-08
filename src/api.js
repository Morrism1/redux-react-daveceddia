import axios from "axios"

export const courseCreate = (name, price) => {
  return axios({
    method: 'POST',
    url: '/courses',
    data: { name: name, price: price }
  })
}

export const getCourses = async () => {
  let data = await axios.get('/courses').then(res => res)

  return data.data
}