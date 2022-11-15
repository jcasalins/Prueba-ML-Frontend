import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve(process.cwd() + '/../.env')
})
const ENV = {
  ML_URL_HTTPS: process.env.ML_URL_HTTPS,
  PORT: process.env.SERVER_PORT
}
export default ENV
