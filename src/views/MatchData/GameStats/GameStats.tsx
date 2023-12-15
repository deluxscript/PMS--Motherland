import {Link} from "react-router-dom"

import motherlandLogo from '../../../assets/images/home/logo.png'

import './GameStats.scss'
import classnames from "classnames";

export const GameStats = () => {
  return (
    <div className='Game-stats'>
      <div className='Game-stats__card'>
        <div className='Game-stats__card-dateTime'>
          <div className='Game-stats__card-dateTime--date'>27-01-2023</div>
          <div className='Game-stats__card-dateTime--time'>13:00</div>
        </div>
        <div className='Game-stats__card-info'>
          <div className='Game-stats__card-info--media'>
            <img src={motherlandLogo} width={24} alt='opponent-logo' />
          </div>
          <div className='Game-stats__card-info--name'>vs Team A</div>
        </div>
        <div className='Game-stats__card-score'>
          <div className='Game-stats__card-score--value'>3 - 0</div>
          <div className={classnames('Game-stats__card-score--info',
            {'Game-stats__card-score--info-win': false,
              'Game-stats__card-score--info-loose': true, 'Game-stats__card-score--info-draw': false})}>L</div>
        </div>
        <div className='Game-stats__card-action'>
          <Link to='' className='Game-stats__card-action--link'>See more</Link>
        </div>
      </div>
      <div className='Game-stats__card'>
        <div className='Game-stats__card-dateTime'>
          <div className='Game-stats__card-dateTime--date'>22-01-2023</div>
          <div className='Game-stats__card-dateTime--time'>12:00</div>
        </div>
        <div className='Game-stats__card-info'>
          <div className='Game-stats__card-info--media'>
            <img src={motherlandLogo} width={24} alt='opponent-logo' />
          </div>
          <div className='Game-stats__card-info--name'>vs Team B</div>
        </div>
        <div className='Game-stats__card-score'>
          <div className='Game-stats__card-score--value'>1 - 0</div>
          <div className={classnames('Game-stats__card-score--info',
            {'Game-stats__card-score--info-win': true,
              'Game-stats__card-score--info-loose': false, 'Game-stats__card-score--info-draw': false})}>W</div>
        </div>
        <div className='Game-stats__card-action'>
          <Link to='' className='Game-stats__card-action--link'>See more</Link>
        </div>
      </div>
    </div>
  )
}
