import ICoordinate from '../typings/interfaces/ICoordinate'
import EOrientation from '../typings/enums/EOrientation'
import EDirection from '../typings/enums/EDirection'

import { getCurrentPlayer } from './PlayerService'
import { validateCoordinates } from './CollisionDetectionService'

/**
 * Place the Robot at the specified posistion.
 *
 * @param coordinates {ICoordinate} the position for the X-Axis and Y-Axis on the table
 * @param orientation {EOrientation} which direction the Robot is facing
 */
export const place = (coordinates: ICoordinate, orientation: EOrientation): void => {
  if (orientation && validateCoordinates(coordinates)) {
    getCurrentPlayer()?.setPosition({ orientation, coordinates })
  }
}

/**
 * Rotate the Robot over his own access.
 *
 * @param direction {EDirection} which direction the Robot should rotate. eg. Left or Right
 */
const rotate = (direction: EDirection): void => {
  const { coordinates, orientation } = getCurrentPlayer()?.getPosition()

  if (orientation) {
    const newOrientation = {
      [EOrientation.N]: EDirection.RIGHT === direction ? EOrientation.E : EOrientation.W,
      [EOrientation.E]: EDirection.RIGHT === direction ? EOrientation.S : EOrientation.N,
      [EOrientation.S]: EDirection.RIGHT === direction ? EOrientation.W : EOrientation.E,
      [EOrientation.W]: EDirection.RIGHT === direction ? EOrientation.N : EOrientation.S,
    }[orientation]

    getCurrentPlayer()?.setPosition({ coordinates, orientation: newOrientation })
  }
}

/**
 * Rotate the Robot counter clockwise.
 *
 * @see rotate method
 */
export const turnLeft = (): void => rotate(EDirection.LEFT)

/**
 * Rotate the Robot clockwise.
 *
 * @see rotate method
 */
export const turnRight = (): void => rotate(EDirection.RIGHT)

/**
 * Move forward the Robot one block forward.
 */
export const move = (): void => {
  const { coordinates, orientation } = getCurrentPlayer()?.getPosition()

  if (coordinates && orientation) {
    const newCoordinates = {
      [EOrientation.N]: { ...coordinates, y: coordinates.y + 1 },
      [EOrientation.E]: { ...coordinates, x: coordinates.x + 1 },
      [EOrientation.S]: { ...coordinates, y: coordinates.y - 1 },
      [EOrientation.W]: { ...coordinates, x: coordinates.x - 1 },
    }[orientation]

    if (validateCoordinates(newCoordinates)) {
      getCurrentPlayer()?.setPosition({ coordinates: newCoordinates, orientation })
    }
  }
}
