import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {AsyncThunkLoading, RootState} from '../types'
import {
  allMatches,
  getAllMatches,
  getSingleMatchPerformance,
  MatchPerformanceData,
  saveMatchPerformance, updateMatchPerformance
} from "../../api"

type InitialMatchPerformanceState = {
  /**
   * The loading state of creating match stat data
   */
  loadingMatchStatsData: AsyncThunkLoading
  /**
   * The loading state of updating match stat data
   */
  loadingMatchStatsDataUpdate: AsyncThunkLoading
  /**
   * The current selected match
   */
  currentMatch: MatchPerformanceData
  /**
   * The loading state of current selected match
   */
  loadingCurrentMatch: AsyncThunkLoading
  /**
   * The list of all matches
   */
  allMatches: allMatches[]
  /**
   * The loading state of all matches
   */
  loadingAllMatches: AsyncThunkLoading
}

const initialState: InitialMatchPerformanceState = {
  loadingMatchStatsData: 'idle',
  loadingMatchStatsDataUpdate: 'idle',
  currentMatch: {},
  loadingCurrentMatch: 'idle',
  allMatches: [],
  loadingAllMatches: 'idle'
}

/**
 * Create match performance data
 */
export const saveMatchPerformanceThunk = createAsyncThunk<
  unknown,
  { data: any }
>('stats/match-performance', ({data}) => {
  return saveMatchPerformance(data)
})

/**
 * Get Single Match Data
 */
export const getSingleMatchPerformanceThunk = createAsyncThunk<
  MatchPerformanceData,
  { id: number }
>('stats/single-match-performance', ({id}) => {
  return getSingleMatchPerformance(id)
})

/**
 * Update Single Match Data
 */
export const updateMatchPerformanceThunk = createAsyncThunk<
  unknown,
  { id: number, data: any }
>('stats/update-match-performance', ({id, data}) => {
  return updateMatchPerformance(id, data)
})

/**
 * Get all matches
 */
export const getAllMatchesThunk = createAsyncThunk<
  undefined | allMatches[]
>('stats/all-matches', () => {
  return getAllMatches()
})

export const matchStatsDataSlice = createSlice({
  name: 'matchPerformanceData',
  initialState,
  reducers: {
    resetCurrentMatch: (
      state
    ) => {
      state.currentMatch = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveMatchPerformanceThunk.pending, state => {
        state.loadingMatchStatsData = 'pending'
      })
      .addCase(saveMatchPerformanceThunk.fulfilled, state => {
        if (
          state.loadingMatchStatsData === 'pending'
        ) {
          state.loadingMatchStatsData = 'succeeded'
        }
      })
      .addCase(saveMatchPerformanceThunk.rejected, (state, action) => {
        if (
          state.loadingMatchStatsData === 'pending'
        ) {
          state.loadingMatchStatsData = 'failed'
          console.error('Error creating match stat data', action.error)
        }
      })
      .addCase(getSingleMatchPerformanceThunk.pending, state => {
        state.loadingCurrentMatch = 'pending'
      })
      .addCase(getSingleMatchPerformanceThunk.fulfilled, (state, action) => {
        if (
          state.loadingCurrentMatch === 'pending'
        ) {
          state.loadingCurrentMatch = 'succeeded'
          if (action.payload) {
            state.currentMatch = action.payload
          }
        }
      })
      .addCase(getSingleMatchPerformanceThunk.rejected, (state, action) => {
        if (
          state.loadingCurrentMatch === 'pending'
        ) {
          state.loadingCurrentMatch = 'failed'
          console.error('Error getting the current match', action.error)
        }
      })
      .addCase(getAllMatchesThunk.pending, state => {
        state.loadingAllMatches = 'pending'
      })
      .addCase(getAllMatchesThunk.fulfilled, (state, action) => {
        if (
          state.loadingAllMatches === 'pending'
        ) {
          state.loadingAllMatches = 'succeeded'
          if (action.payload) {
            state.allMatches = action.payload
          }
        }
      })
      .addCase(getAllMatchesThunk.rejected, (state, action) => {
        if (
          state.loadingAllMatches === 'pending'
        ) {
          state.loadingAllMatches = 'failed'
          console.error('Error getting all matches', action.error)
        }
      })
      .addCase(updateMatchPerformanceThunk.pending, state => {
        state.loadingMatchStatsDataUpdate = 'pending'
      })
      .addCase(updateMatchPerformanceThunk.fulfilled, state => {
        if (
          state.loadingMatchStatsDataUpdate === 'pending'
        ) {
          state.loadingMatchStatsDataUpdate = 'succeeded'
        }
      })
      .addCase(updateMatchPerformanceThunk.rejected, (state, action) => {
        if (
          state.loadingMatchStatsDataUpdate === 'pending'
        ) {
          state.loadingMatchStatsDataUpdate = 'failed'
          console.error('Error updating match stat data', action.error)
        }
      })
  }
})

export const { resetCurrentMatch } = matchStatsDataSlice.actions

export const matchStatsDataSelector = (state: RootState) => state.matchStatsData

export const matchStatsDataReducer = matchStatsDataSlice.reducer
