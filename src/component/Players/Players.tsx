import {FC} from "react"

import {PlayersProfile} from "../../api"

type PlayersProp = {
  players: PlayersProfile[] | undefined
  onClickAddPage: () => void
  onClickEditPage: (status: boolean, playerId: number) => void
}
export const Players: FC<PlayersProp> = ({players, onClickAddPage, onClickEditPage}) => {

  return (
    <div>
      <div className='my-4'>
        <button className='bg-yellowColor px-8 py-2 font-bold text-white' onClick={onClickAddPage}>Add Player</button>
      </div>
      <table className="shadow-sm bg-white">
        <thead>
        <tr>
          <th className='bg-blackColor border text-left px-8 py-4 text-white'>ID</th>
          <th className='bg-blackColor border text-left px-8 py-4 text-white'>Image</th>
          <th className='bg-blackColor border text-left px-8 py-4 text-white'>Name</th>
          <th className='bg-blackColor border text-left px-8 py-4 text-white'>Position</th>
          <th className='bg-blackColor border text-left px-8 py-4 text-white'></th>
        </tr>
        </thead>
        <tbody>
        {
          players && players.map(player => (
            <tr key={player.id}>
              <td className='border px-8 py-4'>{player.id}</td>
              <td className='border px-8 py-4'><img src={player.imageurl} width={50} /></td>
              <td className='border px-8 py-4'>{player.name}</td>
              <td className='border px-8 py-4'>{player.position}</td>
              <td className='border px-8 py-4'>
                <button className='bg-yellowColor px-4 py-2 font-bold text-white'
                  onClick={() => onClickEditPage(true, player.id)}>Edit Player
                </button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}
