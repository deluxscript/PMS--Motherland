const apiURI = process.env.REACT_APP_API_URI

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export class UnauthorizedError extends Error {
  constructor(url: string) {
    super(`Unauthorized request to endpoint ${url}`)
  }
}

export class ApiError extends Error {
  constructor(url: string, status: number, public responseBody: string) {
    super(
      `bad request to endpoint ${url}, status ${status}, response body ${responseBody}`
    )
  }
}

async function apiResponse(res: Response) {
  if (res.status === 401) {
    throw new UnauthorizedError(res.url)
  } else if (res.status >= 500) {
    throw new ApiError(res.url, res.status, await res.text())
  } else {
    return res
  }
}

const apiRequest = async (
  endpoint: string,
  method: Method,
  data: object = {}
): Promise<Response> => {
  const requestURL = apiURI + endpoint
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if (method === 'GET') {
    return fetch(requestURL, {
      credentials: 'include',
    }).then(apiResponse)
  }

  const res = await fetch(requestURL, {
    method,
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(data),
  })

  return apiResponse(res)
}

type AuthenticationData = {
  username: string,
  password: string
}

type User = {
  username: string
}

type AuthenticationResult = {
  code: 'OK'
}

export function loginAuthentication(data: AuthenticationData): Promise<AuthenticationResult> {
  return apiRequest('/login', 'POST', data)
    .then(res => res.json())
}

export function getAuthenticatedUser(): Promise<User> {
  return apiRequest('/user', 'GET')
    .then(res => res.json())
}

export type MatchStatType = {
  timestamp: string
  type: string
  name: string
  stage: string
  homeTeamName: string
  homeScore: number
  awayTeamName: string
  awayScore: number
}

export type OffensiveStatsType = {
  goals: number
  assists: number
  shotsOnTarget: number
  blockedShots: number
  shotsOffTarget: number
  shotsInsidePenaltyArea: number
  shotsOutsidePenaltyArea: number
  offsides: number
  freeKicks: number
  corners: number
  throwIns: number
  takeOnsSuccess: number
  takeOnsTotal: number
}

export type DistributionStatsType = {
  successfulPasses: number
  totalPasses: number
  passAccuracy: number
  keyPasses: number
  totalPassesInFinalThird: number
  successfulPassesInFinalThird: number
  totalPassesInMiddleThird: number
  successfulPassesInMiddleThird: number
  totalPassesInDefenciveThird: number
  successfulPassesInDefenciveThird: number
  totalLongPasses: number
  successfulLongPasses: number
  totalMediumPasses: number
  successfulMediumPasses: number
  totalShortPasses: number
  successfulShortPasses: number
  totalForwardPasses: number
  successfulForwardPasses: number
  totalSidewaysPasses: number
  successfulSidewaysPasses: number
  totalBackwardPasses: number
  successfulBackwardPasses: number
  totalCrosses: number
  successfulCrosses: number
  totalControlUnderPressure: number
  successfulControlUnderPressure: number
}

export type DefensiveStatsType = {
  totalTackles: number
  successfulTackles: number
  totalAerialDuels: number
  successfulAerialDuels: number
  totalGroundDuels: number
  successfulGroundDuels: number
  interceptions: number
  clearances: number
  recoveries: number
  blocks: number
  mistakes: number
  fouls: number
  wonFouls: number
  yellowCards: number
  redCards: number
}

export type GoalKeeperStatsType = {
  goalsConceded: number
  catches: number
  parries: number
  totalGoalKicks: number
  successfulGoalKicks: number
  totalAerialClearance: number
  successfulAerialClearance: number
}

export type PhysicalDataType = {
  totalDistanceCovered: number
  averageSpeed: number
  maximumSpeed: number
}

export type Stats = {
  [playerId: number]: {
    offensiveStats: OffensiveStatsType
    distributionStats: DistributionStatsType
    defensiveStats: DefensiveStatsType
    goalKeeperStats: GoalKeeperStatsType
    physicalData: PhysicalDataType
  }
}

export type matchDataType = {
  timestamp: string
  homeTeam: string
  homeScore: string
  awayTeam: string
  awayScore: string
  type: string
  stage: string
  publish: boolean
  stats: Stats
}

export type TrainingDataType = {
  timestamp: string
  teamName: string
  name: string
  publish: boolean
  stats: Stats
}

export type PlayersProfile = {
  id: number
  name: string
  position: string
  imageurl: string
}

export function getAllPlayers(): Promise<PlayersProfile[]> {
  return apiRequest('/all-players', 'GET')
    .then(res => res.json())
}

export function addNewPlayer(name: string, position: string, imageurl: string): Promise<Response> {
  return apiRequest('/create-player', 'POST', {
    name: name,
    position: position,
    imageurl: imageurl
  })
    .then(res => res.json())
}

export function getSinglePlayer(id: number): Promise<PlayersProfile> {
  return apiRequest(`/players/${id}`, 'GET')
    .then(res => res.json())
}

export function updateSinglePlayer(id: number, name: string, position: string, imageurl: string): Promise<Response> {
  return apiRequest(`/players/${id}`, 'PUT', {
    name: name,
    position: position,
    imageurl: imageurl
  })
    .then(res => res.json())
}

export function saveMatchPerformance(data: matchDataType): Promise<Response> {
  return apiRequest('/save-match-data', 'POST', data)
    .then(res => res.json())
}

export type PlayerStats = {
  playerId: number
  offensiveStats: OffensiveStatsType
  distributionStats: DistributionStatsType
  defensiveStats: DefensiveStatsType
  goalkeeperStats: GoalKeeperStatsType
  physicalData: PhysicalDataType
}

export type MatchPerformance = {
  matchId: number
  timeStamp: string
  homeTeam: string
  homeScore: number
  awayTeam: string
  awayScore: number
  type: string
  stage: string
  publish: boolean
  playerStats: PlayerStats[]
}

export type MatchPerformanceData = {
  [matchId: string]: MatchPerformance
}

export function getSingleMatchPerformance(id: number): Promise<MatchPerformanceData> {
  return apiRequest(`/match/${id}/match-performances`, 'GET')
    .then(res => res.json())
}

export type allMatchesResponse = {
  id: number
  timestamp: string
  hometeam: string
  homescore: number
  awayteam: string
  awayscore: number
  type: string
  stage: string
  publish: boolean
}

export type allMatches = {
  matchId: number
  timeStamp: string
  homeTeam: string
  homeScore: number
  awayTeam: string
  awayScore: number
  type: string
  stage: string
  publish: boolean
}

export function getAllMatches(): Promise<allMatches[]> {
  return apiRequest(`/match/match-performances`, 'GET')
    .then(res => res.json())
    .then((data:allMatchesResponse[]) => {
      return data.map(item => ({
        matchId: item.id,
        timeStamp: item.timestamp,
        homeTeam: item.hometeam,
        homeScore: item.homescore,
        awayTeam: item.awayteam,
        awayScore: item.awayscore,
        type: item.type,
        stage: item.stage,
        publish: item.publish
      }))
    })
}

export function updateMatchPerformance(id: number, data: matchDataType): Promise<Response> {
  return apiRequest(`/match/${id}/match-performances`, 'PUT', data)
    .then(res => res.json())
}
