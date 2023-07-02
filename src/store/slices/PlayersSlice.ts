import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {AsyncThunkLoading, RootState} from '../types'
import {
  addNewPlayer,
  getAllPlayers,
  getSinglePlayer,
  PlayersProfile,
  updateSinglePlayer
} from "../../api";

type InitialPlayersState = {
  /**
   * The list of all players
   */
  players: PlayersProfile[] | undefined
  /**
   * Single player requested
   */
  singlePlayer: PlayersProfile
  /**
   * The loading state of getting all players
   */
  loadingGettingPlayers: AsyncThunkLoading
  /**
   * The loading state of creating new player
   */
  loadingCreatingNewPlayerStatus: AsyncThunkLoading
  /**
   * The loading state of getting a single player
   */
  loadingGettingSinglePlayerStatus: AsyncThunkLoading
  /**
   * The loading state of updating a single player
   */
  loadingUpdatingPlayerStatus: AsyncThunkLoading
}

const initialState: InitialPlayersState = {
  players: undefined,
  singlePlayer: {
    id: 0, name:'', position:'', imageurl:''
  },
  loadingGettingPlayers: 'idle',
  loadingCreatingNewPlayerStatus: 'idle',
  loadingGettingSinglePlayerStatus: 'idle',
  loadingUpdatingPlayerStatus: 'idle'
}

/**
 * Gets all players profile
 */
export const getPlayersThunk = createAsyncThunk<
 undefined | PlayersProfile[]
>('players/profile', () => {
  return getAllPlayers()
})

/**
 * Create a new player profile
 */
export const createNewPlayerThunk = createAsyncThunk<
  unknown,
  { name: string, position: string, imageurl: string }
>('players/add-profile', ({name, position, imageurl}) => {
  return addNewPlayer(name, position, imageurl)
})

/**
 * Gets single player profile
 */
export const getSinglePlayerThunk = createAsyncThunk<
  PlayersProfile,
  { id: number }
>('players/get-profile', ({id}) => {
  return getSinglePlayer(id)
})

/**
 * Update single player profile
 */
export const updateSinglePlayerThunk = createAsyncThunk<
  unknown,
  { id: number, name: string, position: string, imageurl: string }
>('players/update-profile', ({id, name, position, imageurl}) => {
  return updateSinglePlayer(id, name, position, imageurl)
})

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlayersThunk.pending, state => {
        state.loadingGettingPlayers = 'pending'
      })
      .addCase(getPlayersThunk.fulfilled, (state, action) => {
        if (
          state.loadingGettingPlayers === 'pending'
        ) {
          state.loadingGettingPlayers = 'succeeded'
          if (action.payload) {
            state.players = action.payload
          }
        }
      })
      .addCase(getPlayersThunk.rejected, (state, action) => {
        if (
          state.loadingGettingPlayers === 'pending'
        ) {
          state.loadingGettingPlayers = 'failed'
          console.error('Error getting players profile', action.error)
        }
      })
      .addCase(createNewPlayerThunk.pending, state => {
        state.loadingCreatingNewPlayerStatus = 'pending'
      })
      .addCase(createNewPlayerThunk.fulfilled, state => {
        if (
          state.loadingCreatingNewPlayerStatus === 'pending'
        ) {
          state.loadingCreatingNewPlayerStatus = 'succeeded'
        }
      })
      .addCase(createNewPlayerThunk.rejected, (state, action) => {
        if (
          state.loadingCreatingNewPlayerStatus === 'pending'
        ) {
          state.loadingCreatingNewPlayerStatus = 'failed'
          console.error('Error creating new player', action.error)
        }
      })
      .addCase(getSinglePlayerThunk.pending, state => {
        state.loadingGettingSinglePlayerStatus = 'pending'
      })
      .addCase(getSinglePlayerThunk.fulfilled, (state, action) => {
        if (
          state.loadingGettingSinglePlayerStatus === 'pending'
        ) {
          state.loadingGettingSinglePlayerStatus = 'succeeded'
          if (action.payload) {
            state.singlePlayer = action.payload
          }
        }
      })
      .addCase(getSinglePlayerThunk.rejected, (state, action) => {
        if (
          state.loadingGettingSinglePlayerStatus === 'pending'
        ) {
          state.loadingGettingSinglePlayerStatus = 'failed'
          console.error('Error getting a single player', action.error)
        }
      })
      .addCase(updateSinglePlayerThunk.pending, state => {
        state.loadingUpdatingPlayerStatus = 'pending'
      })
      .addCase(updateSinglePlayerThunk.fulfilled, state => {
        if (
          state.loadingUpdatingPlayerStatus === 'pending'
        ) {
          state.loadingUpdatingPlayerStatus = 'succeeded'
        }
      })
      .addCase(updateSinglePlayerThunk.rejected, (state, action) => {
        if (
          state.loadingUpdatingPlayerStatus === 'pending'
        ) {
          state.loadingUpdatingPlayerStatus = 'failed'
          console.error('Error update player', action.error)
        }
      })
  }
})

export const playersSelector = (state: RootState) => state.players

export const playersReducer = playersSlice.reducer
