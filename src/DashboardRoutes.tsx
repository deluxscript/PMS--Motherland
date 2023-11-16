import { FC } from 'react'
import { Route, Routes} from 'react-router-dom'
import { routes } from './constants/routes'
import { Login } from './views/Login/Login'
import { Dashboard } from "./views/Dashboard/Dashboard"
import {useAppController} from "./hooks/useAppController"
import {Players} from "./views/Players/Players";
import {MatchData} from "./views/MatchData/MatchData";
import {TrainingData} from "./views/TrainingData/TrainingData";
import {Events} from "./views/Events/Events";
import {MyAccount} from "./views/MyAccount/MyAccount";

export const DashboardRoutes: FC = () => {
  const controller = useAppController()
    return (
      <>
        <Routes>
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.players} element={<Players players={controller.players.players}/>}/>
          <Route path={routes.matchData} element={<MatchData />}/>
          <Route path={routes.trainingData} element={<TrainingData />}/>
          <Route path={routes.events} element={<Events />}/>
          <Route path={routes.account} element={<MyAccount/>}/>
          <Route path={routes.logout} element={<MyAccount/>}/>
        </Routes>
      </>
    )
}
