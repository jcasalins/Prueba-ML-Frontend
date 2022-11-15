import app from './src/app.js'
import ENV from './src/utils/env.utils.js'
const port = ENV.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
