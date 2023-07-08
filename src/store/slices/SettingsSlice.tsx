import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {AsyncThunkLoading, RootState} from '../types'

type InitialSettingsState = {
  [instanceId: string]: {
    mode: string
    competition: string
    dataStatus: string
  }
}

const initialState: InitialSettingsState = {}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setModeStatus: (
      state,
      action: PayloadAction<{ selectedOption: string; instanceId: string }>
    ) => {
      const {selectedOption, instanceId} = action.payload
      state[instanceId] = {
        ...state[instanceId],
        mode: selectedOption,
      }
    }
  },
  extraReducers: (builder) => {}
})

export  const {
  setModeStatus
} = settingsSlice.actions

export const settingsSelector = (state: RootState) => state.settings

export const settingsReducer = settingsSlice.reducer
