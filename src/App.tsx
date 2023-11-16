import {BrowserRouter} from 'react-router-dom'

import Layout from "./component/Layout/Layout"
import { DashboardLayout } from "./component/DashboardLayout/DashboardLayout"

import './App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <DashboardLayout />
      </Layout>
    </BrowserRouter>
  )
}
