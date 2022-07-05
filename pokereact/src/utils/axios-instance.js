import axios from 'axios'
import { BASE_URL } from './env_var'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { accept: 'text/plain' },
})
export default instance
