import axios from 'axios'
import ENV from '../utils/env.utils.js'

const axiosInstance = axios.create({
  baseURL: ENV.ML_URL_HTTPS,
  timeout: 10000,
  responseType: 'json'
})

export default axiosInstance
