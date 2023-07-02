import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

import {getPlayersThunk, playersSelector} from "../store/slices/PlayersSlice"
import {AppDispatch} from "../store/types"

/**
 * Hook to manage players.
 */
export const usePlayers = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {players} = useSelector(playersSelector)

  useEffect(() => {
    dispatch(getPlayersThunk())
  }, [])

  return {
    /**
     * Array of all players
     */
    players
  }
}
