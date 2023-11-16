import {Stats} from "../api"

export const initialTrainingFormValues = {
  timestamp: '',
  teamName: 'Motherland SC Berlin',
  name: 'Training',
  publish: false,
  stats: {} as Stats
}

export const initialFormValues = {
  timestamp: '',
  homeTeam: '',
  homeScore: '',
  awayScore: '',
  awayTeam: '',
  type: '',
  stage: '',
  publish: false,
  stats: {} as Stats
}

export const generatePlayerStats = () => ({
    offensiveStats: {
      goals: 0,
      assists: 0,
      shotsOnTarget: 0,
      blockedShots: 0,
      shotsOffTarget: 0,
      shotsInsidePenaltyArea: 0,
      shotsOutsidePenaltyArea: 0,
      offsides: 0,
      freeKicks: 0,
      corners: 0,
      throwIns: 0,
      takeOnsSuccess: 0,
      takeOnsTotal: 0
    },
    distributionStats: {
      successfulPasses: 0,
      totalPasses: 0,
      passAccuracy: 0,
      keyPasses: 0,
      totalPassesInFinalThird: 0,
      successfulPassesInFinalThird: 0,
      totalPassesInMiddleThird: 0,
      successfulPassesInMiddleThird: 0,
      totalPassesInDefenciveThird: 0,
      successfulPassesInDefenciveThird: 0,
      totalLongPasses: 0,
      successfulLongPasses: 0,
      totalMediumPasses: 0,
      successfulMediumPasses: 0,
      totalShortPasses: 0,
      successfulShortPasses: 0,
      totalForwardPasses: 0,
      successfulForwardPasses: 0,
      totalSidewaysPasses: 0,
      successfulSidewaysPasses: 0,
      totalBackwardPasses: 0,
      successfulBackwardPasses: 0,
      totalCrosses: 0,
      successfulCrosses: 0,
      totalControlUnderPressure: 0,
      successfulControlUnderPressure: 0
    },
    defensiveStats: {
      totalTackles: 0,
      successfulTackles: 0,
      totalAerialDuels: 0,
      successfulAerialDuels: 0,
      totalGroundDuels: 0,
      successfulGroundDuels: 0,
      interceptions: 0,
      clearances: 0,
      recoveries: 0,
      blocks: 0,
      mistakes: 0,
      fouls: 0,
      wonFouls: 0,
      yellowCards: 0,
      redCards: 0
    },
    goalKeeperStats: {
      goalsConceded: 0,
      catches: 0,
      parries: 0,
      totalGoalKicks: 0,
      successfulGoalKicks: 0,
      totalAerialClearance: 0,
      successfulAerialClearance: 0
    },
    physicalData: {
      totalDistanceCovered: 0,
      averageSpeed: 0,
      maximumSpeed: 0
    }
})
