import React, { FC, useState } from "react"
import classnames from "classnames"

import {Sidebar} from "../Sidebar/SidebarMenu"
import {DashboardRoutes} from "../../DashboardRoutes"

import Logo from "../../assets/images/home/logo.png"

import './DashboardLayout.scss'

export const DashboardLayout: FC = () => {
  const [activeSidebarNav, setActiveSidebarNav] = useState<'ACCOUNT' | 'ADMIN'>('ACCOUNT')
  return (
    <div className="Dashboard-Layout">
      <div className='Dashboard-Layout__header'>
        <div className='Dashboard__header-media'><img src={Logo} width={24} alt='Team-Logo'/></div>
        <div className='Dashboard__header-title'>Team 1</div>
      </div>
      <div className='Dashboard-Layout__wrapper'>
        <div className='Dashboard-Layout__wrapper-content'>
          <div className='Dashboard-Layout__wrapper-content--sidebar'>
            <div className={classnames('Dashboard-Layout__wrapper-content--sidebar-your-account',
              {'Dashboard-Layout__wrapper-content--sidebar-your-account--active': activeSidebarNav === 'ACCOUNT'})}
                 onClick={() => setActiveSidebarNav('ACCOUNT')}
            >
              Your account
            </div>
            <Sidebar activeSidebarNav={activeSidebarNav} />
            <div className={classnames('Dashboard-Layout__wrapper-content--sidebar-administrator',
              {'Dashboard-Layout__wrapper-content--sidebar-administrator--active': activeSidebarNav === 'ADMIN'})}
                 onClick={() => setActiveSidebarNav('ADMIN')}
            >
              Administrator
            </div>
          </div>
          <div className='Dashboard-Layout__wrapper-content--current-body'>
            <DashboardRoutes/>
          </div>
        </div>
      </div>
    </div>
  )
}
