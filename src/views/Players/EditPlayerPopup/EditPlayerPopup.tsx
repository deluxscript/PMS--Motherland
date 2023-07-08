import {FC} from "react"
import ReactDOM from 'react-dom'
import {Popup} from "../../../component/Popup/Popup";

type EditPlayerPopupProps = {
  onClose: () => void
}

const EditPlayerPopup: FC<EditPlayerPopupProps> = ({onClose}) => {
  return (
    <Popup onClose={onClose}>
      <div>Edit page</div>
    </Popup>
  )
}

export const EditPlayerPopupPortal: FC<EditPlayerPopupProps> = ({onClose}) => {
  const container = document.body

  return ReactDOM.createPortal(<EditPlayerPopup onClose={onClose}/>, container)
}
