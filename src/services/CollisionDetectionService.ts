import ICoordinate from '../typings/interfaces/ICoordinate'

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

/**
 * Validates input parameters against constraints.
 *
 * @param coordinates {ICoordinate}
 */
export const validateCoordinates = (coordinates: ICoordinate): boolean => {
  const isRespectingTheBoundaries =
    coordinates.x >= 0 && coordinates.y >= 0 && coordinates.x < MATRIX_SIZE && coordinates.y < MATRIX_SIZE

  const hasAClearPathAhead =
    FIXED_OBSTACLES.length === 0 ||
    !FIXED_OBSTACLES.find((obstacle) => obstacle.x === coordinates.x && obstacle.y === coordinates.y)

  return isRespectingTheBoundaries && hasAClearPathAhead
}
