import {FC, useEffect} from "react"
import ReactDOM from "react-dom"

import {Popup} from "../Popup/Popup"
import {useDispatch, useSelector} from "react-redux"
import {AppDispatch} from "../../store/types"
import {
  getSingleMatchPerformanceThunk,
  matchStatsDataSelector, updateMatchPerformanceThunk
} from "../../store/slices/MatchPerformanceSlice"
import {FormStep, MatchForm} from "../MatchForm/MatchForm"
import {InitialStep} from "../MatchForm/InitialStep"
import {OffensiveStats} from "../MatchForm/OffensiveStats"
import {DistributionStats} from "../MatchForm/DistributionStats"
import {DefensiveStats} from "../MatchForm/DefensiveStats"
import {GoalkeeperStats} from "../MatchForm/GoalKeeperStats"
import {PhysicalData} from "../MatchForm/PhysicalData"
import {ConfirmSubmission} from "../MatchForm/ConfirmSubmission"
import {playersSelector} from "../../store/slices/PlayersSlice"
import {matchDataType} from "../../api"

type EditMatchPopupProps = {
  onClose: () => void
  matchId: number
}

const EditMatchPopup: FC<EditMatchPopupProps> = ({onClose, matchId}) => {

  const dispatch = useDispatch<AppDispatch>()
  const { currentMatch } = useSelector(matchStatsDataSelector)

  const {players} = useSelector(playersSelector)

  useEffect(() => {
    dispatch(getSingleMatchPerformanceThunk({id: matchId}))
  }, [])

  if (Object.keys(currentMatch).length === 0) {
    // Render a loading state or return null until currentMatch is populated
    return null;
  }

  const convertedStats = currentMatch[0].playerStats.reduce((result, stat) => {
    const {
      playerId,
      offensiveStats,
      distributionStats,
      defensiveStats,
      goalkeeperStats,
      physicalData
    } = stat;

    result[playerId] = {
      offensiveStats,
      distributionStats,
      defensiveStats,
      goalKeeperStats: goalkeeperStats,
      physicalData
    };

    return result;
  }, {} as matchDataType["stats"])

  const initialValues = {
    timestamp: currentMatch[0].timeStamp,
    homeTeam: currentMatch[0].homeTeam,
    homeScore: currentMatch[0].homeScore,
    awayTeam: currentMatch[0].awayTeam,
    awayScore: currentMatch[0].awayScore,
    type: currentMatch[0].type,
    stage: currentMatch[0].stage,
    publish: currentMatch[0].publish,
    stats: convertedStats
  }

  return (
    <Popup onClose={onClose}>
      <div className='p-4'>
        <div className='py-8'>
          <h1 className='border-b pb-2 text-2xl uppercase text-center font-semibold'>Edit Match
            #{matchId}</h1>
        </div>
        <MatchForm
          initialValues={initialValues}
          onSubmit={async (data) => {
            dispatch(updateMatchPerformanceThunk({id: matchId, data: data}))
              .then(() => onClose())
          }}
        >
          <FormStep label="Initial Step">
            <InitialStep/>
          </FormStep>
          <FormStep label="Offensive Stats">
            <OffensiveStats players={players}/>
          </FormStep>
          <FormStep label="Distribution Stats">
            <DistributionStats players={players}/>
          </FormStep>
          <FormStep label="Defensive Stats">
            <DefensiveStats players={players}/>
          </FormStep>
          <FormStep label="GoalKeeper Stats">
            <GoalkeeperStats players={players}/>
          </FormStep>
          <FormStep label="Physical Data">
            <PhysicalData players={players}/>
          </FormStep>
          <FormStep label="Confirm Submission">
            <ConfirmSubmission/>
          </FormStep>
        </MatchForm>
      </div>
    </Popup>
  )
}

export const EditMatchPopupPortal: FC<EditMatchPopupProps> = ({onClose, matchId}) => {
  const container = document.body

  return ReactDOM.createPortal(<EditMatchPopup onClose={onClose} matchId={matchId}/>, container)
}
