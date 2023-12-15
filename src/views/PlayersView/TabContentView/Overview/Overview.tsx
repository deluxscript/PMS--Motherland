import {FC} from "react"

import './Overview.scss'
import {PlayerType} from "../../../../config/constants";
import ReactCountryFlag from "react-country-flag";

type OverviewProps = {
  playerData: PlayerType | undefined
}

export const Overview: FC<OverviewProps> = props => {
  return (
    <div className='overview'>
      <div className='overview__section'>
        <div className='overview__section-title'>Personal Information</div>
        <div className='overview__section-content'>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Nationality</div>
            <div className='overview__section-content--sub-value'>
              {props.playerData && <><span>{props.playerData.country}</span> <ReactCountryFlag className='overview__section-content--sub-value-icon' countryCode={props.playerData.countryCode}/></>}
            </div>
          </div>
          <div className='overview__personal-content--dob'>
            <div className='overview__section-content--sub-title'>Date of Birth</div>
            <div className='overview__section-content--sub-value'>{props.playerData && props.playerData.dob}</div>
          </div>
          <div className='overview__personal-content--position'>
            <div className='overview__section-content--sub-title'>Position</div>
            <div className='overview__section-content--sub-value'>{props.playerData && props.playerData.position}</div>
          </div>
        </div>
      </div>
      <div className='overview__section'>
        <div className='overview__section-title'>Contact Information</div>
        <div className='overview__section-content'>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Phone Number</div>
            <div className='overview__section-content--sub-value'>
              0810937748379
            </div>
          </div>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Email Address</div>
            <div className='overview__section-content--sub-value'>deluxscript@gmail.com</div>
          </div>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Home Address</div>
            <div className='overview__section-content--sub-value'>Spahdfege 23, 12734 Berlin</div>
          </div>
        </div>
      </div>
      <div className='overview__section'>
        <div className='overview__section-title'>Contract Information</div>
        <div className='overview__section-content'>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Contract Type</div>
            <div className='overview__section-content--sub-value'>
              Full Time
            </div>
          </div>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Contract start</div>
            <div className='overview__section-content--sub-value'>01/07/2023</div>
          </div>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Contract End</div>
            <div className='overview__section-content--sub-value'>31/07/2024</div>
          </div>
          <div className='overview__section-content--sub'>
            <div className='overview__section-content--sub-title'>Salary</div>
            <div className='overview__section-content--sub-value'>-</div>
          </div>
        </div>
      </div>
    </div>
  )
}
