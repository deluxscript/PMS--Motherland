import React, { FC } from "react"

import { Card } from "../../component/Card/Card"
import { UsefulLinkButton } from "../../component/UsefulLinkButton/UsefulLinkButton"
import { AddPlayer } from "../../component/Icons/AddPlayer"
import { AddEvent } from "../../component/Icons/AddEvent"
import { AddTeam } from "../../component/Icons/AddTeam"

import ActivityIcon from "../../assets/images/icons/activity.png"
import StatsIcon from "../../assets/images/icons/stats.png"
import OpponentIcon from "../../assets/images/icons/opponent.png"
import LinksIcon from "../../assets/images/icons/link.png"

import './Dashboard.scss'

export const Dashboard: FC = () => {
  return (
    <div className='Dashboard'>
      <Card title={'Activities'} icon={ActivityIcon}>Content 1</ Card>
      <Card title={'Next Match'} icon={OpponentIcon}>Content 1</ Card>
      <Card title={'Player Stats'} icon={StatsIcon}>Content 2</ Card>
      <Card title={'Useful Links'} icon={LinksIcon} className='Dashboard__usefulLinks'>
        <UsefulLinkButton link={'#'} title='Add Players'>
          <AddPlayer />
        </UsefulLinkButton>
        <UsefulLinkButton link={'#'} title='Add Events'>
          <AddEvent />
        </UsefulLinkButton>
        <UsefulLinkButton link={'#'} title='Add Team'>
          <AddTeam />
        </UsefulLinkButton>
      </ Card>
    </div>
  )
}
