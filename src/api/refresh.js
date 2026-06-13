import axios from "axios"

const refreshClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export const refreshToken = async () => {
  const response = await refreshClient.post(
    "/auth/refresh"
  )

  return response.data
}