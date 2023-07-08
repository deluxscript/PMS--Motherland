import {FC, useEffect, useState} from "react"

import {DropdownButton} from "../DropdownButton/DropdownButton"
import {useSelector} from "react-redux";
import { settingsSelector} from "../../store/slices/SettingsSlice";
import {MonthSchedule} from "../MonthSchedule/MonthSchedule";
import {MatchBox} from "../MatchBox/MatchBox";
import {matchData, months} from "../../config/constants";

export const Home: FC = () => {

  const [dropDownMode, setDropDownMode] = useState('')
  const [dropDownCompetition, setDropDownCompetition] = useState('')

  const {mode, competition} = useSelector(settingsSelector)

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const startYear = 2023
  const startMonth = 5 // June is month 5 (0-based index)
  const stats = []

  const isStatsEmpty = stats.length === 0

  const pastMonths = [];
  for (let year = currentYear; year >= startYear; year--) {
    const endMonth = (year === currentYear) ? currentMonth : 11
    const beginMonth = (year === startYear) ? startMonth : 11

    for (let month = endMonth; month >= beginMonth; month--) {
      pastMonths.push({month, year});
    }
  }

  useEffect(() => {
    mode && setDropDownMode(mode.mode)
    competition && setDropDownCompetition(competition.competition)
  }, [mode, competition])

  return (
    <div className=''>
      <div className='border-b py-2'>
        <div className='flex justify-between'>
          <div className='flex'>
            <DropdownButton options={['Matches & Training', 'Match', 'Training']} instanceId='mode' classNames='mr-4'/>
            <DropdownButton options={['All Competitions', 'Friendly Match', 'League Match', 'Cup Match']}
                            instanceId='competition' disabled={mode && mode.mode === 'Training'} classNames='mr-4'/>
          </div>
          <div>
            <DropdownButton options={['Training', 'vs. Match']} title='Add Data' instanceId='dataStatus' addAction />
          </div>
        </div>
      </div>
      <div>
        {pastMonths.map(({month, year}) => {
          const filteredData = matchData.filter(item => {
            const [itemDay, itemMonth, itemYear] = item.timestamp.split("-")
            const itemMonthName = months[parseInt(itemMonth) - 1]

            if (dropDownMode === "Match") {
              return itemMonthName === months[month] && itemYear === year.toString() && item.type === "Match"
            } else if (dropDownMode === "Training") {
              return itemMonthName === months[month] && itemYear === year.toString() && item.type === "Training"
            } else {
              return itemMonthName === months[month] && itemYear === year.toString()
            }
          })

          return (
            <MonthSchedule
              key={`${month}-${year}`}
              title={`${months[month]} ${year}`}
            >
              {filteredData.map(data => (<MatchBox key={data.timestamp} info={data}/>))}
            </MonthSchedule>
          )
        })}
      </div>
    </div>
  )
}
