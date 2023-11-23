import React, {FC, useState} from "react"
import classnames from "classnames"
import {Link, useLocation} from "react-router-dom"

import HomeIcon from "../../assets/images/icons/home.png"
import Player from "../../assets/images/icons/player.png"
import Training from "../../assets/images/icons/training.png"
import Schedule from "../../assets/images/icons/schedule.png"
import Profile from "../../assets/images/icons/user.png"
import Logout from "../../assets/images/icons/logout.png"

import './SidebarMenu.scss'

type SidebarMenuProps = {
  menu: SideBarTabsType
  onClick: () => void
  isActive: boolean
}

type TabType = 'HOME' | 'PLAYERS' | 'MDATA' | 'TDATA' | 'EVENT' | 'MY ACCOUNT' | 'SIGNOUT'
const sidebarMenu = ['HOME', 'PLAYERS', 'MDATA', 'TDATA', 'EVENT', 'MY ACCOUNT', 'SIGNOUT']

export type SideBarTabsType = {
  /**
   * The display name of the tab
   */
  tabName: string
  /**
   * The type of the tab, using the predefined types
   */
  tabType: TabType
  /**
   * The image associated with the tab, assumed to be a PNG element
   */
  image: string
  /**
   * A brief description or subtext for the tab
   */
  subText: string
  link: string
}

const sideBarTabs: SideBarTabsType[] = [
  {
    tabName: 'Home',
    tabType: 'HOME',
    image: HomeIcon,
    subText: 'Your starting point',
    link: '/dashboard',
  },
  {
    tabName: 'Players',
    tabType: 'PLAYERS',
    image: Player,
    subText: 'Explore player profiles',
    link: '/dashboard/players',
  },
  {
    tabName: 'Match Data',
    tabType: 'MDATA',
    image: Training,
    subText: 'View match statistics',
    link: '/dashboard/match-data',
  },
  {
    tabName: 'Training Data',
    tabType: 'TDATA',
    image: Training,
    subText: 'Track training progress',
    link: '/dashboard/training-data',
  },
  {
    tabName: 'Events',
    tabType: 'EVENT',
    image: Schedule,
    subText: 'View and schedule events',
    link: '/dashboard/events',
  },
  {
    tabName: 'My Account',
    tabType: 'MY ACCOUNT',
    image: Profile,
    subText: 'Manage your account',
    link: '/dashboard/my-account',
  },
  {
    tabName: 'Sign Out',
    tabType: 'SIGNOUT',
    image: Logout,
    subText: '',
    link: '/logout',
  }
]

const SidebarMenu:FC<SidebarMenuProps> = props => {
  return (
    <div className="Sidebar__menu">
      <Link
        to={props.menu.link}
        onClick={props.onClick}
        className={classnames('Sidebar__menu-tab-button',
          {'Sidebar__tab-button--active': props.isActive})}
      >
        <span
          className={classnames('Sidebar__menu-tab-button-media', {'Sidebar__menu-tab-button-media--active': props.isActive})}><img
          src={props.menu.image} width={20} alt='menu-icon'/></span>
        <div className='Sidebar__menu-tab-button-title'>
          <span className='Sidebar__menu-tab-button-title--text'>{props.menu.tabName}</span>
          <span className='Sidebar__menu-tab-button-title--sub-text'>{props.menu.subText}</span>
        </div>
      </Link>
    </div>
  )
}

export const Sidebar: FC<{ activeSidebarNav: string }> = ({activeSidebarNav}) => {
  const location = useLocation()
  const { pathname } = location

  const [activeTab, setActiveTab] = useState('')

  //This is created to get the active tab if a user just goes directly to a page by its URL
  const browserActiveTab = sideBarTabs.find(item => item.link === pathname)

  const activeSidebarMenu = activeTab || (browserActiveTab && browserActiveTab.tabType) || sidebarMenu[0]

  return (
    <div className="Sidebar">
      {activeSidebarNav === 'ACCOUNT' && sideBarTabs.map(item => (
        <SidebarMenu
          key={item.tabName}
          menu={item}
          isActive={item.tabType === activeSidebarMenu}
          onClick={() => setActiveTab(item.tabType)}
        />
      ))
      }
    </div>
  );
}
