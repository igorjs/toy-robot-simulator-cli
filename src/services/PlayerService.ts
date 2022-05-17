import IRobot from '../typings/interfaces/IRobot'
import Robot from '../models/Robot'

let currentPlayer: IRobot

const PLAYERS: IRobot[] = []

export const addPlayer = (name: string): void => {
  const player = new Robot(name)
  setCurrentPlayer(player)
  PLAYERS.push(player)
}

export const setCurrentPlayer = (player: IRobot): void => {
  currentPlayer = player
}

export const getCurrentPlayer = (): IRobot => {
  return currentPlayer
}

export const getOtherPlayers = (): IRobot[] => {
  return PLAYERS.filter((player) => player !== getCurrentPlayer())
}

export const switchPlayer = (): void => {
  const activePlayer = PLAYERS.find((player) => player !== getCurrentPlayer()) || getCurrentPlayer()

  setCurrentPlayer(activePlayer)

  console.info(`Now you're controlling: ${activePlayer?.getName()}`)
}

export const reportCurrentPlayer = (): void => {
  const player = getCurrentPlayer()
  console.info(player?.report())
}

export const reportAllPlayers = (): void => {
  if (PLAYERS.length === 0) {
    console.info(`There is no Players in the arena.`)
  } else {
    PLAYERS.forEach((player) => {
      console.info(player.report())
    })
  }
}
