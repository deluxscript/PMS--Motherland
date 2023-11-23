import {FC, useState} from "react"

import './PlayersView.scss'
import { TabButton } from "../../component/TabButton/TabButton";
import {TabContent} from "../../component/TabContent/TabContent";
import {Overview} from "./TabContentView/Overview/Overview";

const playersViewCategories = ['overview', 'numbers', 'stats', 'attendance', 'ratings']

export const PlayersView = () => {
  const [selectedTab, setSelectedTab] = useState('')
  const activeTab = selectedTab || playersViewCategories[0]
  return (
    <div className='Players-view'>
      <div className='Players-view__header'>
        <div className='Players-view__header-tabs'>
          {playersViewCategories.map(category => {
            return (
              <TabButton
                isActive={activeTab === category}
                onClick={() => setSelectedTab(category)}
                className='Players-view__header-tabs-category'
              >
                {category}
              </TabButton>
            )
          })}
        </div>
      </div>
      {playersViewCategories.map(category => (
        <TabContent isActive={activeTab === category}>
          {category === 'overview' && <Overview />}
        </TabContent>
      ))}
    </div>
  )
}
