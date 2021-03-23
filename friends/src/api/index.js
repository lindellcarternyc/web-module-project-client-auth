import axios from 'axios'

const BASE_URL = 'http://localhost:6969/api'

const axiosWithAuth = () => {
  const token = window.localStorage.getItem('friendsListToken')
  console.log(token)
  return axios.create({
    headers: {
      'authorization': token
    }
  })
}

export const login = async ({ username, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, { username, password })
    const token = res.data.payload
    console.log('token', token)
    window.localStorage.setItem('friendsListToken', token)
  } catch (err) {
    throw err
  }
}

export const getFriends = async () => {
  try {
    const response = await axiosWithAuth().get(`${BASE_URL}/friends`)
    console.log(response.data)
    return response.data
  } catch (err) {
    throw err
  }
}