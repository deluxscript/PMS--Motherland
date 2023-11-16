import {FC, useState} from "react";
import {allMatches} from "../../api"

import League from "../../assets/images/icons/league.png"
import Friendly from "../../assets/images/icons/friendly.png"
import Cup from "../../assets/images/icons/cup.png"
import CheckMark from "../../assets/images/icons/check.png"
import {EditMatchPopupPortal} from "../EditMatchPopup/EditMatchPopup";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/types";
import {resetCurrentMatch} from "../../store/slices/MatchPerformanceSlice";

type MatchBoxProps = {
  info: allMatches
}
export const MatchBox: FC<MatchBoxProps> = ({info}) => {

  const dispatch = useDispatch<AppDispatch>()
  const [isActiveEditMatchPopup, setIsActiveEditMatchPopup] = useState(false)
  const openEditMatchPopup = () => setIsActiveEditMatchPopup(true)
  const closeEditMatchPopup = async () => {
    await dispatch(resetCurrentMatch())
    setIsActiveEditMatchPopup(false)
  }

  const getLogoIcon = (name: string) => {
    return {
      'League': League,
      'Friendly': Friendly,
      'Cup': Cup
    }[name]
  }

  const [day, month, year] = info.timeStamp.split("-")
  const date = new Date(`${month}/${day}/${year}`)
  const formattedDate = new Intl.DateTimeFormat("en-US", {day: "numeric", weekday: "short"}).format(date)
  const [formattedDay, formattedWeekday] = formattedDate.split(" ")

  return (
    <div className='flex items-center h-20'>
      <div className='flex flex-row items-center text-greyColor border-y h-full border-gray-400 mr-4 min-w-100'>
        <span className='w-10 font-bold text-lg text-center mr-1'>{formattedDay}</span>
        <span className='text-xs'>{formattedWeekday}</span>
      </div>
      <div className='flex flex-row h-16 border-y bg-gray-200 items-center rounded-lg px-4'>
        <div className='flex w-60 justify-between border-gray-500 border-r p-2 pl-0 items-center'>
          <span className='bg-winBg text-scoreColor w-5 h-5 rounded-circle text-xs font-bold flex items-center justify-center'>W</span>
          <div className='flex items-center text-gray-500'>
            <span><img src={getLogoIcon(info.type)}/></span>
            <span className='px-1 text-xs'>{info.type}</span>
          </div>
          <span className='bg-blackColor text-drawBg px-1 rounded text-center flex items-center text-xs'>{info.stage}</span>
        </div>
        <div className='w-450 p-2 pl-0 flex justify-center items-center border-gray-500 border-r'>
          <div className='px-2'>{info.homeTeam}</div>
          <div className='flex justify-center items-center'>
            <span className='bg-blackColor text-white w-6 h-6 text-center mx-1'>{info.homeScore}</span>
            <span className='bg-blackColor text-white w-6 h-6 text-center mx-1'>{info.awayScore}</span>
          </div>
          <div className='px-2'>{info.awayTeam}</div>
        </div>
        <div className='flex justify-evenly items-center w-72'>
          <button onClick={openEditMatchPopup} className='bg-defaultBg text-defaultColor text-xs px-4 py-1'>Edit</button>
          <span><img src={CheckMark}/></span>
        </div>
      </div>
      {isActiveEditMatchPopup && <EditMatchPopupPortal onClose={closeEditMatchPopup} matchId={info.matchId} />}
    </div>
  )
}
