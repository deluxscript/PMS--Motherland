import {FC, useState} from "react"

import {AppController} from "../../hooks/useAppController"

import {SidebarMenu} from "../../component/Sidebar/SidebarMenu"
import {MainContent} from "../../component/MainContent/MainContent"
import {Home} from "../../component/Home/Home"
import {Players} from "../Players/Players"
import {MatchPerformance} from "../../component/MatchPerformance/MatchPerformance"
import {TrainingPerformance} from "../../component/TrainingPerformance/TrainingPerformance"
import {SchedulePage} from "../../component/Schedule/Schedule"

import player from '../../images/icons/player.png'
import home from '../../images/icons/home.png'
import schedule from '../../images/icons/schedule.png'
import training from '../../images/icons/training.png'
import motherlandLogo from "../../images/home/logo.png"

import './Dashboard.css'

type DashboardProps = {
  controller: AppController
}

const sideBarTabs = [
  {
    tabName: 'Home',
    tabType: 'HOME',
    image: home
  },
  {
    tabName: 'Players',
    tabType: 'PLAYERS',
    image: player
  },
  {
    tabName: 'Data',
    tabType: 'DATA',
    image: training
  },
  {
    tabName: 'Log Out',
    tabType: 'LOGOUT',
    image: schedule
  }
]

export const Dashboard: FC<DashboardProps> = ({controller}) => {
  const { players } = controller.players

  const [activeTab, setActiveTab] = useState('HOME')

  return (
    <div className="flex">
      <div className='sidebar bg-sideBarColor text-white'>
        <div className='py-4'>
          <img src={motherlandLogo} className='w-16 m-auto' alt="logo" width={150} height={70}/>
        </div>
        {sideBarTabs.map(item => (
          <SidebarMenu
            key={item.tabName}
            tabName={item.tabName}
            image={item.image}
            tabType={item.tabType}
            isActive={item.tabType === activeTab}
            onClick={() => setActiveTab(item.tabType)}
          />
          ))
        }
      </div>
      {
        sideBarTabs.map(item =>
          <MainContent key={item.tabType} selected={activeTab === item.tabType}>
            <div>
              {activeTab === 'HOME' ? <Home /> : null}
              {activeTab === 'PLAYERS' ? <Players players={players} /> : null}
              {activeTab === 'DATA' ? <MatchPerformance /> : null}
              {activeTab === 'TRAINING' ? <TrainingPerformance/> : null}
              {activeTab === 'SCHEDULE' ? <SchedulePage/> : null}
            </div>
          </MainContent>
        )
      }
    </div>
  )
}
