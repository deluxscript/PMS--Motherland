import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import {RootState} from './types'
import {playersReducer} from "./slices/PlayersSlice";

export const rootReducer = combineReducers({
  players: playersReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {}
    })
})
