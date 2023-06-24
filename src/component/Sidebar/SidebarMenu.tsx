import {FC, useState} from "react"
import classnames from "classnames"


import './SidebarMenu.css'

type SidebarMenuProps = {
  tabType: string
  tabName: string
  image: string
  isActive: boolean
  onClick: () => void
}

export const SidebarMenu: FC<SidebarMenuProps> = ({tabName, tabType, image,isActive, onClick}) => {

  return (
    <div className="my-2 py-2 px-4">
      <button
        onClick={onClick}
        className={classnames('w-full flex items-center rounded-md p-2 hover:bg-yellowColor',
          {'bg-yellowColor': isActive})}
      >
        <span><img src={image} width={30}/></span>
        <span className='px-2'>{tabName}</span>
      </button>
    </div>
  );
}
