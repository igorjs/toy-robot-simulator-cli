import IRobot from '../typings/interfaces/IRobot'
import Robot from '../models/Robot'

let currentPlayer: IRobot

const PLAYERS: IRobot[] = []

export const addPlayer = (name: string): void => {
  PLAYERS.push(new Robot(name))
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

  console.info(`Now you're controlling: ${activePlayer.getName()}`)
}

export const reportPlayers = (): void => {
  if (PLAYERS.length === 0 ) {
    console.info(`There is no Players in the arena.`)
  } else {
    PLAYERS.forEach((player) => {
      const name = player.getName()

      const { coordinates, orientation } = player.getPosition()

      if (coordinates && orientation) {
        console.info(`${name} is ${coordinates?.x},${coordinates?.y},${orientation}`)
      } else {
        console.info(`${name} is not in the arena yet!`)
      }
    })
  }
}
