import axios from 'axios'

const API_URL = process?.env?.API_URL

export const getUsers = async (params: any) => {
  try {
    console.log(params);

    const response = await axios.get(`${API_URL}/users`, {params})

    return response.data
  } catch (error: any) {
    throw error?.response?.data || error
  }
}

export const createUser = async (userData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData)

    return response.data
  } catch (error: any) {
    throw error?.response?.data || error
  }
}

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`)

    return response.data
  } catch (error: any) {
    throw error?.response?.data || error
  }
}

export const updateUser = async (userId: string, userData: FormData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData)

    return response.data
  } catch (error: any) {
    throw error?.response?.data || error
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`)

    return response.data
  } catch (error: any) {
    throw error?.response?.data || error
  }
}
