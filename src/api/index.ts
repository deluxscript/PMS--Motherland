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

type AuthenticationResult = {
  code: 'OK'
}

export function loginAuthentication(data: AuthenticationData): Promise<AuthenticationResult> {
  return apiRequest('/login', 'POST', data)
    .then(res => res.json())
}

export type MatchStatType = {
  timestamp: string
  type: string
  name: string
  stage: string
  homeTeamName: string
  homeTeamScores: number
  awayTeamName: string
  awayTeamScores: number
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
