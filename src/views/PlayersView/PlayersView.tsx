import {FC} from "react"
import { FaAngleRight } from "react-icons/fa"
import ReactCountryFlag from "react-country-flag"


import './PlayersView.scss'
import {players} from "../../config/constants"
import {Link} from "react-router-dom"

const positionOrder = ['GK', 'LB', 'CB', 'RB', 'CDM', 'LM', 'CM', 'RM', 'LW', 'CAM', 'RW', 'CF']
const sortedPlayers = players.sort((a, b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position))

export const PlayersView = () => {
  return (
    <div className='players-view'>
      <div className='players-view__header'>
        <div className='Players-view__header-title'>All Players</div>
      </div>
      <div className='players-view__content'>
        {
          sortedPlayers.map(player => (
            <div key={player.id} className='players-view__content-player-card'>
              <div className='players-view__content-player-card--media'>
                <img className='players-view__content-player-card--media-image' src={player.imgSrc} alt='player'/>
              </div>
              <div className='players-view__content-player-card--info'>
                <ReactCountryFlag className='players-view__content-player-card--info-country' countryCode={player.countryCode} title={player.country}/>
                <div className='players-view__content-player-card--info-name'>{player.name}</div>
                <div className='players-view__content-player-card--info-position'>{player.position}</div>
              </div>
              <div className='players-view__content-player-card--data'>
                <div className='players-view__content-player-card--data-age'>AGE: {player.age}</div>
                <div className='players-view__content-player-card--data-appearance'>APR: {player.appearance}</div>
              </div>
              <div className='players-view__content-player-card--action'>
                <Link to={`/dashboard/players/${player.id}`} className='players-view__content-player-card--action-link'>
                  <span>see more</span>
                  <FaAngleRight />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
