import axios from 'axios'

const BASE_URL = 'http://localhost:6969/api'

const axiosWithAuth = () => {
  const token = window.localStorage.getItem('friendsListToken')
  
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'authorization': token
    }
  })
}

export const login = async ({ username, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, { username, password })
    const token = res.data.payload
    
    window.localStorage.setItem('friendsListToken', token)
  } catch (err) {
    throw err
  }
}

export const getFriends = async () => {
  try {
    const response = await axiosWithAuth().get(`/friends`)
    
    return response.data
  } catch (err) {
    throw err
  }
}

export const getFriend = async (id) => {
  try {
    const response = await axiosWithAuth().get(`/friends/${id}`)
    return response.data
  } catch (err) {
    throw err
  }
}

export const createFriend = async ({ name, email, age}) => {
  try {
    const response = await axiosWithAuth().post(`/friends`, { name, email, age })
    return response.data
  } catch ( err ) {
    throw err
  }
}

export const deleteFriend = async (id) => {
  try {
    const response = await axiosWithAuth().delete(`/friends/${id}`)
    console.log(response)
  } catch (err) {
    throw err
  }
}

export const updateFriend = async (data) => {
  try {
    const response = await axiosWithAuth().put(`/friends/${data.id}`, data)
    console.log(response)
  } catch (err) {
    throw err
  }
}