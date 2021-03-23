import axios from 'axios'

const BASE_URL = 'http://localhost:6969/api'

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