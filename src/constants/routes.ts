export enum Routes {
    login = '/login',
    dashboard = '/dashboard',
    players = '/dashboard/players',
    singlePlayer = '/dashboard/players/:playerId',
    matchData = '/dashboard/match-data',
    trainingData = '/dashboard/training-data',
    events = '/dashboard/events',
    account= '/dashboard/my-account',
    logout = '/logout'
  }

  export const routes = {
    login: Routes.login,
    dashboard: Routes.dashboard,
    players: Routes.players,
    singlePlayer: Routes.singlePlayer,
    matchData: Routes.matchData,
    trainingData: Routes.trainingData,
    events: Routes.events,
    account: Routes.account,
    logout: Routes.logout,
  }
