import {FC, useState} from "react"

import {PlayersProfile} from "../../api"

import {Table} from "../../component/Table/Table"
import {EditPlayerPopupPortal} from "./EditPlayerPopup/EditPlayerPopup"
import {AddPlayerPopupPortal} from "./AddPlayerPopup/AddPlayerPopup"

type PlayersProp = {
  players: PlayersProfile[] | undefined
}
export const Players: FC<PlayersProp> = ({players}) => {

  const [isActiveEditPlayerPopup, setIsActiveEditPlayerPopup] = useState(false)
  const [isActiveAddPlayerPopup, setIsActiveAddPlayerPopup] = useState(false)

  const openEditPlayerPopup = () => setIsActiveEditPlayerPopup(true)
  const closeEditPlayerPopup = () => setIsActiveEditPlayerPopup(false)

  const openAddPlayerPopup = () => setIsActiveAddPlayerPopup(true)
  const closeAddPlayerPopup = () => setIsActiveAddPlayerPopup(false)

  const tableHeads = [
    {
      id: 'imageurl',
      title: 'Image'
    },
    {
      id: 'name',
      title: 'Name'
    },
    {
      id: 'position',
      title: 'Position'
    }
  ]

  return (
    <>
      <div className='my-4'>
        <button className='bg-yellowColor px-8 py-2 font-bold text-white' onClick={openAddPlayerPopup}>Add Player</button>
      </div>
      <Table columns={tableHeads} data={players!!}/>
      {isActiveEditPlayerPopup && <EditPlayerPopupPortal onClose={closeEditPlayerPopup} />}
      {isActiveAddPlayerPopup && <AddPlayerPopupPortal onClose={closeAddPlayerPopup}/>}
    </>
  )
}
