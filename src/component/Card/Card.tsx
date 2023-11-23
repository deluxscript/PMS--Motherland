import React, {FC, PropsWithChildren} from 'react'
import classnames from "classnames"

import './Card.scss'

type CardType = {
  title: string
  icon?: string
  className?: string
}

export const Card: FC<PropsWithChildren<CardType>> = props => {
  return(
    <div className='Card'>
      <div className='Card__header'>
        { props.icon &&
          <span className='Card__header-media'>
            <img className='Card__header-media--img' src={props.icon} alt='card-icon' />
          </span>
        }
        <span className='Card__header-title'>{props.title}</span>
      </div>
      <div className={classnames('Card__content', props.className)}>{props.children}</div>
    </div>
  )
}
