import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'


import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App