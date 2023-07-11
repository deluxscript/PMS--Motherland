import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import {RootState} from './types'
import {playersReducer} from "./slices/PlayersSlice";
import {settingsReducer} from "./slices/SettingsSlice";
import {matchStatsDataReducer} from "./slices/MatchPerformanceSlice";

export const rootReducer = combineReducers({
  players: playersReducer,
  settings: settingsReducer,
  matchStatsData: matchStatsDataReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {}
    })
})
