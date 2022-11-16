import AppRoutes from './routes/Index'
import { HeadProvider } from 'react-head'
function App() {
  return (
    <>
      <HeadProvider>
        <AppRoutes />
      </HeadProvider>
    </>
  )
}

export default App
