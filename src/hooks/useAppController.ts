import {usePlayers} from "./usePlayers";
import {useMatchData} from "./useMatchData";

export type AppController = ReturnType<typeof useAppController>

export function useAppController () {
  const players = usePlayers()
  const allMatches = useMatchData()

  return {
    players,
    allMatches
  }
}
