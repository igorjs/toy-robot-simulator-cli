import Robot from '../models/Robot'
import IRobot from '../typings/interfaces/IRobot'
import * as PositionService from './PositionService'

const PLAYERS: IRobot[] = [new Robot('Player 1'), new Robot('Player 2')]

let currentPlayer = PLAYERS[0]

export const getCurrentPlayer = (): IRobot => {
  return currentPlayer
}

export const getOtherPlayers = (): IRobot[] => {
  const currentPlayer = getCurrentPlayer()
  return PLAYERS.filter((player) => player !== currentPlayer)
}

export const switchPlayer = (): void => {
  const cPlayer = getCurrentPlayer()
  currentPlayer = PLAYERS.find((player) => player !== cPlayer) || cPlayer
  console.info(`Now you controlling: ${currentPlayer.getName()}`)
}

export const reportPlayers = (): void => {
  PLAYERS.forEach((player) => {
    console.info(`Reporting position for: ${player.getName()}`)
    console.info(PositionService.report(player))
  })
}
