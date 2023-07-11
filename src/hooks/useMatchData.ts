import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

import {AppDispatch} from "../store/types"
import {getAllMatchesThunk, matchStatsDataSelector} from "../store/slices/MatchPerformanceSlice"

/**
 * Hook to manage players.
 */
export const useMatchData = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { allMatches } = useSelector(matchStatsDataSelector)

  useEffect(() => {
    dispatch(getAllMatchesThunk())
  }, [])

  return {
    /**
     * List of all matches
     */
    allMatches
  }
}
