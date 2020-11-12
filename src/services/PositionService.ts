import IRobot from '../typings/interfaces/IRobot'
import ICoordinate from '../typings/interfaces/ICoordinate'
import EOrientation from '../typings/enums/EOrientation'
import EDirection from '../typings/enums/EDirection'

import * as CollisionDetectionService from './CollisionDetectionService'

/**
 * Place the Robot at the specified posistion.
 *
 * @param coordinates {ICoordinate} the position for the X-Axis and Y-Axis on the table
 * @param orientation {EOrientation} which direction the Robot is facing
 */
export const place = (robot: IRobot, coordinates: ICoordinate, orientation: EOrientation): void => {
  if (orientation && CollisionDetectionService.validateCoordinates(coordinates)) {
    robot.setPosition({ orientation, coordinates })
  }
}

/**
 * Rotate the Robot over his own access.
 *
 * @param direction {EDirection} which direction the Robot should rotate. eg. Left or Right
 */
const rotate = (robot: IRobot, direction: EDirection): void => {
  const { coordinates, orientation } = robot.getPosition()

  if (orientation) {
    const newOrientation = {
      [EOrientation.N]: EDirection.RIGHT === direction ? EOrientation.E : EOrientation.W,
      [EOrientation.E]: EDirection.RIGHT === direction ? EOrientation.S : EOrientation.N,
      [EOrientation.S]: EDirection.RIGHT === direction ? EOrientation.W : EOrientation.E,
      [EOrientation.W]: EDirection.RIGHT === direction ? EOrientation.N : EOrientation.S,
    }[orientation]

    robot.setPosition({ coordinates, orientation: newOrientation })
  }
}

/**
 * Rotate the Robot counter clockwise.
 *
 * @see rotate method
 */
export const turnLeft = (robot: IRobot): void => rotate(robot, EDirection.LEFT)

/**
 * Rotate the Robot clockwise.
 *
 * @see rotate method
 */
export const turnRight = (robot: IRobot): void => rotate(robot, EDirection.RIGHT)

/**
 * Move forward the Robot one block forward.
 */
export const move = (robot: IRobot): void => {
  const { coordinates, orientation } = robot.getPosition()

  if (coordinates && orientation) {
    const newCoordinates = {
      [EOrientation.N]: { ...coordinates, y: coordinates.y + 1 },
      [EOrientation.E]: { ...coordinates, x: coordinates.x + 1 },
      [EOrientation.S]: { ...coordinates, y: coordinates.y - 1 },
      [EOrientation.W]: { ...coordinates, x: coordinates.x - 1 },
    }[orientation]

    if (CollisionDetectionService.validateCoordinates(newCoordinates)) {
      robot.setPosition({ coordinates: newCoordinates, orientation })
    }
  }
}

/**
 * Report the Robot current position.
 */
export const report = (robot: IRobot): string => {
  const { coordinates, orientation } = robot.getPosition()

  if (coordinates && orientation) {
    return `${coordinates.x},${coordinates.y},${orientation}`
  }

  return `There is no Robot on the Table.`
}
