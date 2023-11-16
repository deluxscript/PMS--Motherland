import {FC, useState} from "react"
import ReactDOM from "react-dom"

import {Popup} from "../Popup/Popup"

import './TrainingPopup.css'
import {FormStep, MatchForm} from "../MatchForm/MatchForm";
import {saveMatchPerformanceThunk} from "../../store/slices/MatchPerformanceSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/types";
import {playersSelector} from "../../store/slices/PlayersSlice";
import {TrainingDataType} from "../../api";
import {initialTrainingFormValues} from "../../hooks/useMatch";
import {InitialTrainingStep} from "../TrainingForm/InitialTrainingStep";
import {OffensiveStats} from "../MatchForm/OffensiveStats";
import {DistributionStats} from "../MatchForm/DistributionStats";
import {DefensiveStats} from "../MatchForm/DefensiveStats";
import {GoalkeeperStats} from "../MatchForm/GoalKeeperStats";
import {PhysicalData} from "../MatchForm/PhysicalData";
import {ConfirmSubmission} from "../MatchForm/ConfirmSubmission";

type TrainingPopupProps = {
  onClose: () => void
}

const TrainingPopup: FC<TrainingPopupProps> = ({ onClose }) => {

  const dispatch = useDispatch<AppDispatch>()

  const {players} = useSelector(playersSelector)

  const initialValues: TrainingDataType = initialTrainingFormValues

  return (
    <Popup onClose={onClose}>
      <div className='p-4'>
        <div className='py-8'>
          <h1 className='border-b pb-2 text-2xl uppercase text-center font-semibold'>Add new training
            statistics</h1>
        </div>
        <MatchForm
          initialValues={initialValues}
          onSubmit={async (data) => {
            dispatch(saveMatchPerformanceThunk({data: data}))
              .then(() => onClose())
          }}
        >
          <FormStep label="Initial Step">
            <InitialTrainingStep/>
          </FormStep>
        </MatchForm>
        <FormStep label="Offensive Stats">
          <div>ssknk</div>
        </FormStep>
      </div>
    </Popup>
  )
}

export const TrainingPopupPortal: FC<TrainingPopupProps> = ({onClose}) => {
  const container = document.body

  return ReactDOM.createPortal(<TrainingPopup onClose={onClose}/>, container)
}
