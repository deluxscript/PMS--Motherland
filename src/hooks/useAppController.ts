import {usePlayers} from "./usePlayers";

export type AppController = ReturnType<typeof useAppController>

export function useAppController () {
  const players = usePlayers()

  return {
    players
  }
}
