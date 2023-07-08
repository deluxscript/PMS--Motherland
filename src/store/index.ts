import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import {RootState} from './types'
import {playersReducer} from "./slices/PlayersSlice";
import {settingsReducer} from "./slices/SettingsSlice";

export const rootReducer = combineReducers({
  players: playersReducer,
  settings: settingsReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {}
    })
})
