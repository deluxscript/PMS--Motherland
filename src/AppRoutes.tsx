import { FC } from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import { routes } from './constants/routes'
import { Login } from './views/Login/Login'
import { Dashboard } from "./views/Dashboard/Dashboard"
import {useAppController} from "./hooks/useAppController"

export const AppRoutes: FC = () => {
  const controller = useAppController()
    return (
      <>
        <Layout>
          <Routes>
            <Route path={routes.login} element={<Login/>} />
            <Route path={routes.dashboard} element={<Dashboard controller={controller}/>}/>
          </Routes>
        </Layout>
      </>
    )
}
