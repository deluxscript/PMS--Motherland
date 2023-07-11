import React, {FC, useEffect} from "react"
import classnames from "classnames"

import closeBtn from "../../images/icons/close.png"

type PopupProps = {
  onClose: () => void
  children?: React.ReactNode
  className?: string
  closeBtnEnabled?: boolean
  isCloseFunctionDisabled?: boolean
}

export const Popup: FC<PopupProps> = ({onClose, children,
  className, closeBtnEnabled,
  isCloseFunctionDisabled}) => {

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && !isCloseFunctionDisabled) {
      onClose()
    }
  }
  const onDocumentClose = () => {
    if (!isCloseFunctionDisabled) {
      onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown)
    document.body.classList.add('suppress-scroll')

    return () => {
      document.body.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('suppress-scroll')
    }
  }, [])

  return (
    <div className='popup fixed top-0 left-0 w-screen h-screen flex items-center justify-center p-4 z-10'>
      <button type='button' onClick={onDocumentClose}
        disabled={isCloseFunctionDisabled}
        className={classnames('bg-blackColor opacity-80 absolute backdrop-blur-lg top-0 left-0 w-full h-full border-0 z-0',
          {'cursor-default': isCloseFunctionDisabled})} />
      <div className='popup-container relative max-w-sm overflow-auto bg-white shadow-md rounded-xl max-h-popup z-2'>
        {children}
        {closeBtnEnabled &&
          <button type='button' onClick={onClose} className='absolute top-2.5 right-2.5 w-5 border-0 bg-transparent'>
            <img src={closeBtn} />
          </button>
        }
      </div>
    </div>
  )
}
