import {SelectDropdown} from "../../../../component/SelectDropdown/SelectDropdown"
import {TabButton} from "../../../../component/TabButton/TabButton"
import {FC, useState} from "react"
import {TabContent} from "../../../../component/TabContent/TabContent"
import {
  DefensiveStatsType,
  OffensiveStatsType,
  sampleDefensiveData, sampleOffensiveData
} from "../../../../config/constants"

import './Stats.scss'

const statsCategories = ['defensive', 'offensive', 'passing', 'physical']

type DefensiveStatsDataType = {
  data: DefensiveStatsType[]
}

type OffensiveStatsDataType = {
  data: OffensiveStatsType[]
}

export const Stats = () => {
  const [selectedTab, setSelectedTab] = useState('')
  const activeTab = selectedTab || statsCategories[0]

  return (
    <div className='stats'>
      <div className='stats__header'>
        <div className='stats__header-title'>Season</div>
        <SelectDropdown options={['2023/2024', '2022/2023']}/>
        <SelectDropdown options={['League', 'Cup', 'Friendly']}/>
      </div>
      <div className='stats__category-header'>
        {statsCategories.map(category => {
          return (
            <TabButton
              key={category}
              isActive={activeTab === category}
              onClick={() => setSelectedTab(category)}
              className='stats__category-header-tabs'
            >
              {category}
            </TabButton>
          )
        })}
      </div>
      <div>
        {statsCategories.map(category => (
          <TabContent key={category} isActive={activeTab === category}>
            {category === 'defensive' && <DefensiveStats data={sampleDefensiveData} />}
            {category === 'offensive' && <OffensiveStats data={sampleOffensiveData} />}
          </TabContent>
        ))}
      </div>
    </div>
  )
}

const DefensiveStats:FC<DefensiveStatsDataType> = props => {
  return (
    <div className='stats__content'>
      <table className='stats__content-table'>
        <thead className='stats__content-table-header'>
          <tr className='stats__content-table-header--row'>
            <th className='stats__content-table-header--row-item'>Date</th>
            <th className='stats__content-table-header--row-item'>vs</th>
            <th className='stats__content-table-header--row-item'>Mins</th>
            <th className='stats__content-table-header--row-item'>Tkl</th>
            <th className='stats__content-table-header--row-item'>STkls</th>
            <th className='stats__content-table-header--row-item'>Int</th>
            <th className='stats__content-table-header--row-item'>SInt</th>
            <th className='stats__content-table-header--row-item'>Fouls</th>
            <th className='stats__content-table-header--row-item'>Clear</th>
            <th className='stats__content-table-header--row-item'>OwnG</th>
            <th className='stats__content-table-header--row-item'>Blocks</th>
          </tr>
        </thead>
        <tbody className='stats__content-table-body'>
        {
          props.data.map(stat => (
            <tr key={stat.date} className='stats__content-table-body--row'>
              <td className='stats__content-table-body--row-item'>{stat.date}</td>
              <td className='stats__content-table-body--row-item'>{stat.opponentName}</td>
              <td className='stats__content-table-body--row-item'>{stat.minutes}</td>
              <td className='stats__content-table-body--row-item'>{stat.tackles}</td>
              <td className='stats__content-table-body--row-item'>{stat.successfulTackles}</td>
              <td className='stats__content-table-body--row-item'>{stat.interception}</td>
              <td className='stats__content-table-body--row-item'>{stat.successfulInterceptions}</td>
              <td className='stats__content-table-body--row-item'>{stat.fouls}</td>
              <td className='stats__content-table-body--row-item'>{stat.clearance}</td>
              <td className='stats__content-table-body--row-item'>{stat.ownGoals}</td>
              <td className='stats__content-table-body--row-item'>{stat.blocks}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

const OffensiveStats:FC<OffensiveStatsDataType> = props => {
  return (
    <div className='stats__content'>
      <table className='stats__content-table'>
        <thead className='stats__content-table-header'>
        <tr className='stats__content-table-header--row'>
          <th className='stats__content-table-header--row-item'>Date</th>
          <th className='stats__content-table-header--row-item'>vs</th>
          <th className='stats__content-table-header--row-item'>Mins</th>
          <th className='stats__content-table-header--row-item'>Goals</th>
          <th className='stats__content-table-header--row-item'>Assists</th>
          <th className='stats__content-table-header--row-item'>SonT</th>
          <th className='stats__content-table-header--row-item'>SOffT</th>
          <th className='stats__content-table-header--row-item'>Drb</th>
          <th className='stats__content-table-header--row-item'>Fouled</th>
          <th className='stats__content-table-header--row-item'>Disp</th>
        </tr>
        </thead>
        <tbody className='stats__content-table-body'>
        {
          props.data.map(stat => (
            <tr key={stat.date} className='stats__content-table-body--row'>
              <td className='stats__content-table-body--row-item'>{stat.date}</td>
              <td className='stats__content-table-body--row-item'>{stat.opponentName}</td>
              <td className='stats__content-table-body--row-item'>{stat.minutes}</td>
              <td className='stats__content-table-body--row-item'>{stat.goals}</td>
              <td className='stats__content-table-body--row-item'>{stat.assists}</td>
              <td className='stats__content-table-body--row-item'>{stat.sonT}</td>
              <td className='stats__content-table-body--row-item'>{stat.sOffT}</td>
              <td className='stats__content-table-body--row-item'>{stat.drb}</td>
              <td className='stats__content-table-body--row-item'>{stat.fouled}</td>
              <td className='stats__content-table-body--row-item'>{stat.disp}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}
