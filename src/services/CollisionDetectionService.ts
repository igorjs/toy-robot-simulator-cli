import IRobot from 'src/typings/interfaces/IRobot'
import ICoordinate from '../typings/interfaces/ICoordinate'

import { getOtherPlayers } from './PlayerService'

const MATRIX_SIZE = 5 // FIXME: Move to a config file

const FIXED_OBSTACLES: ICoordinate[] = []

/**
 * Add a fixed obstable to the surface at the specified coordinate.
 *
 * @param coordinates {ICoordinate}
 */
export const addFixedObstacle = (coordinates: ICoordinate): void => {
  FIXED_OBSTACLES.push(coordinates)
}

const notHitAnyBoundary = (coordinates: ICoordinate): boolean => {
  return coordinates.x >= 0 && coordinates.y >= 0 && coordinates.x < MATRIX_SIZE && coordinates.y < MATRIX_SIZE
}

const notFoundAnyObstacleAhead = (coordinates: ICoordinate): boolean => {
  return !FIXED_OBSTACLES.find((obstacle) => obstacle.x === coordinates.x && obstacle.y === coordinates.y)
}

const notCollidedWithOtherPlayer = (coordinates: ICoordinate): boolean => {
  return !getOtherPlayers().find((player: IRobot) => {
    const playerCoordinates = player.getPosition().coordinates
    return playerCoordinates?.x === coordinates.x && playerCoordinates?.y === coordinates.y
  })
}

/**
 * Validates input parameters against constraints.
 *
 * @param coordinates {ICoordinate}
 */
export const validateCoordinates = (coordinates: ICoordinate): boolean => {
  const isOkayToProceed =
    notHitAnyBoundary(coordinates) && notFoundAnyObstacleAhead(coordinates) && notCollidedWithOtherPlayer(coordinates)

  if (!isOkayToProceed) {
    console.info(`You will collide with an obstacle. Do another move.`)
  }

  return isOkayToProceed
}
