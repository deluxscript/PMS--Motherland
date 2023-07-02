import {FC, useState} from "react"

import {AppController} from "../../hooks/useAppController"

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
import {AddPlayer} from "../AddPlayer/AddPlayer";
import {EditPlayer} from "../EditPlayer/EditPlayer";

type DashboardProps = {
  controller: AppController
}

type EditPageProps = {
  status: boolean
  playerId: number | undefined
}

export const Dashboard: FC<DashboardProps> = ({controller}) => {
  const {players} = controller.players
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
  const [addPage, setAddPage] = useState(false)
  const [editPage, setEditPage] = useState<EditPageProps>({status: false, playerId: undefined})

  const handleEditPage = (status: boolean, playerId: number) => {
    if (playerId) {
      setEditPage({status, playerId})
    }
  }

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
              {activeTab === 'PLAYERS' && !addPage && !editPage.status ?
                <Players
                  players={players}
                  onClickAddPage={() => setAddPage(true)}
                  onClickEditPage={handleEditPage}
                />
                  : null}
              {activeTab === 'PLAYERS' && addPage && !editPage.status ?
                <AddPlayer addPage editPage={editPage.status}/> : null}
              {activeTab === 'PLAYERS' && !addPage && editPage.status ?
                <EditPlayer playerId={editPage.playerId}/> : null}
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
