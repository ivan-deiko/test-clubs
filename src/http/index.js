import axios from 'axios'
const http = axios.create({
  baseURL: 'https://instasport.co/dashboard/api/v1/',
})

http.interceptors.response.use(response => response.data, err => Promise.reject(err))

export default {
  getClubs: () => http('clubs'),
}