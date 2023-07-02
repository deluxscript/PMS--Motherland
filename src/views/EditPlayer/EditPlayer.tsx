import {FC, useEffect, useState} from "react"
import {useAppDispatch} from "../../store/types"
import {useSelector} from "react-redux";
import {
  getSinglePlayerThunk,
  playersSelector,
  updateSinglePlayerThunk
} from "../../store/slices/PlayersSlice";
import {updateSinglePlayer} from "../../api";

type EditPlayerProps = {
  playerId: number | undefined
}

export const EditPlayer: FC<EditPlayerProps> = ({playerId}) => {

  const dispatch = useAppDispatch()
  const { singlePlayer } = useSelector(playersSelector)

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    imageurl: ''
  })


  const handleChange = (event: any) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    playerId && dispatch(updateSinglePlayerThunk({
      id: playerId,
      name: formData.name,
      position: formData.position,
      imageurl: formData.imageurl
    }))
  }


  useEffect(() => {
    playerId && dispatch(getSinglePlayerThunk({id: playerId}))
  }, [])

  useEffect(() => {
    const updatedValues = {
      name: singlePlayer.name,
      position: singlePlayer.position,
      imageurl: singlePlayer.imageurl,
    }
    setFormData(updatedValues)
  }, [singlePlayer])

  return (
    <div>
      <div className='text-2xl py-4 text-center'>Edit Player #{singlePlayer?.id}</div>
      <div className='border-t-2 py-8'>
        <form className='w-full max-w-lg' onSubmit={handleSubmit}>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="name">
                Full name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                name='name'
                type="text"
                placeholder="Jane Doe"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="position">
                Position
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="position"
                  name='position'
                  onChange={handleChange}
                  value={formData.position}
                >
                  <option value='GK'>GK</option>
                  <option value='DEF'>DEF</option>
                  <option value='MF'>MF</option>
                  <option value='FW'>FW</option>
                  <option value='UND'>UND</option>
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20">
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="imageurl">
                Image URL
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="imageurl"
                type="text"
                placeholder="Image URL"
                name='imageurl'
                onChange={handleChange}
                value={formData.imageurl}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <button
                className="shadow bg-yellowColor hover:bg-yellowColor focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
