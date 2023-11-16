import {FC} from "react"
import ReactDOM from "react-dom"

import {Popup} from "../Popup/Popup"
import {InitialStep} from "../MatchForm/InitialStep";

import {generatePlayerStats, initialFormValues} from "../../hooks/useMatch";

import {matchDataType} from "../../api";
import {OffensiveStats} from "../MatchForm/OffensiveStats";
import {useDispatch, useSelector} from "react-redux";
import {playersSelector} from "../../store/slices/PlayersSlice";
import {DistributionStats} from "../MatchForm/DistributionStats";
import {DefensiveStats} from "../MatchForm/DefensiveStats";
import {GoalkeeperStats} from "../MatchForm/GoalKeeperStats";
import {PhysicalData} from "../MatchForm/PhysicalData";
import {ConfirmSubmission} from "../MatchForm/ConfirmSubmission";
import {AppDispatch} from "../../store/types";
import {saveMatchPerformanceThunk} from "../../store/slices/MatchPerformanceSlice";
import {FormStep, MatchForm} from "../MatchForm/MatchForm"
import './MatchPopup.css'

type MatchPopupProps = {
  onClose: () => void
}

const MatchPopup: FC<MatchPopupProps> = ({onClose}) => {

  const dispatch = useDispatch<AppDispatch>()

  const {players} = useSelector(playersSelector)

  const initialValues: matchDataType = initialFormValues

  players && players.map(player => initialFormValues.stats[player.id] = generatePlayerStats())

  return (
    <Popup onClose={onClose}>
      <div className='p-4'>
        <div className='py-8'>
          <h1 className='border-b pb-2 text-2xl uppercase text-center font-semibold'>Add new match statistics</h1>
        </div>
        <MatchForm
          initialValues={initialValues}
          onSubmit={async (data) => {
            dispatch(saveMatchPerformanceThunk({data: data}))
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

export const MatchPopupPortal: FC<MatchPopupProps> = ({onClose}) => {
  const container = document.body

  return ReactDOM.createPortal(<MatchPopup onClose={onClose}/>, container)
}
