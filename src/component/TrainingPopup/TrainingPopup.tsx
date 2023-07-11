import {FC, useState} from "react"
import ReactDOM from "react-dom"

import {Popup} from "../Popup/Popup"

import './TrainingPopup.css'

type TrainingPopupProps = {
  onClose: () => void
}

const TrainingPopup: FC<TrainingPopupProps> = ({ onClose }) => {

  return (
    <Popup onClose={onClose}>
      <div className='p-4'>
        Training Popup
      </div>
    </Popup>
  )
}

export const TrainingPopupPortal: FC<TrainingPopupProps> = ({onClose}) => {
  const container = document.body

  return ReactDOM.createPortal(<TrainingPopup onClose={onClose}/>, container)
}
