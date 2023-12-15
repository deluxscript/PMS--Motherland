import React, {FC, useState} from "react"

export const Events: FC = () => {

  return (
    <div>
      Events
      <ButtonMover />
    </div>
  )
}

const ButtonMover: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const recordPosition = (event: React.MouseEvent<HTMLButtonElement>) => {
    const positionData = {
      x: event.clientX,
      y: event.clientY,
    }
    setPosition(positionData)
    console.log(positionData)
  }

  return (
    <button
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: 'pointer',
      }}
      onMouseMove={recordPosition}
    >
      Move Me!
    </button>
  )
}
