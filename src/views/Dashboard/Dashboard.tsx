import {FC, useState} from "react"

import {SidebarMenu} from "../../component/Sidebar/SidebarMenu"
import {MainContent} from "../../component/MainContent/MainContent"
import {Home} from "../../component/Home/Home"
import {Players} from "../../component/Players/Players"
import {MatchPerformance} from "../../component/MatchPerformance/MatchPerformance"
import {TrainingPerformance} from "../../component/TrainingPerformance/TrainingPerformance"
import {SchedulePage} from "../../component/Schedule/Schedule"

import player from '../../images/icons/player.png'
import home from '../../images/icons/home.png'
import performance from '../../images/icons/performance.png'
import schedule from '../../images/icons/schedule.png'
import training from '../../images/icons/training.png'

import './Dashboard.css'


export const Dashboard: FC = () => {
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
      tabName: 'Match Performance',
      tabType: 'MATCH',
      image: performance
    },
    {
      tabName: 'Training Performance',
      tabType: 'TRAINING',
      image: training
    },
    {
      tabName: 'Schedule',
      tabType: 'SCHEDULE',
      image: schedule
    }
  ]
  const [activeTab, setActiveTab] = useState('HOME')

  return (
    <div className="flex">
      <div className='sidebar bg-sideBarColor text-white'>
        {sideBarTabs.map(item => (
          <SidebarMenu
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
              {activeTab === 'PLAYERS' ? <Players /> : null}
              {activeTab === 'MATCH' ? <MatchPerformance /> : null}
              {activeTab === 'TRAINING' ? <TrainingPerformance/> : null}
              {activeTab === 'SCHEDULE' ? <SchedulePage/> : null}
            </div>
          </MainContent>
        )
      }
    </div>
  )
}
