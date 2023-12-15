import {FC, useState} from "react"
import {TabButton} from "../../component/TabButton/TabButton"

import './MatchData.scss'
import {TabContent} from "../../component/TabContent/TabContent";
import {GameStats} from "./GameStats/GameStats";

const matchDataCategories = ['Game Stats', 'Season Stats']
export const MatchData: FC = () => {
  const [selectedTab, setSelectedTab] = useState('')
  const activeTab = selectedTab || matchDataCategories[0]

  return (
    <div className='Match-data'>
      <div className='Match-data__tab'>
        {matchDataCategories.map(category => {
          return (
            <TabButton
              key={category}
              isActive={activeTab === category}
              onClick={() => setSelectedTab(category)}
              className='Match-data__tab-category'
            >
              {category}
            </TabButton>
          )
        })}
      </div>
      {matchDataCategories.map(category => (
        <TabContent key={category} isActive={activeTab === category}>
          {category === 'Game Stats' && <GameStats />}
          {category === 'Season Stats' && <div>Season Stats</div>}
        </TabContent>
      ))}
    </div>
  )
}
