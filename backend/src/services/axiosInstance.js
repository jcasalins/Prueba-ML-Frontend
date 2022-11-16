import axios from 'axios'
import ENV from '../utils/env.utils.js'

const axiosInstance = axios.create({
  baseURL: ENV.ML_URL_HTTPS,
  responseType: 'json'
})

export default axiosInstance
