import ECommand from '../typings/enums/ECommand'
import EOrientation from '../typings/enums/EOrientation'

import * as PositionService from '../services/PositionService'

/**
 * Send the commands to the Robot.
 *
 * @param command {string}
 * @param parameters {string[]}
 */
export const execute = (command: string, ...parameters: string[]) => {
  switch (command) {
    case ECommand.PLACE:
      if (parameters.length === 3) {
        const coordinates = {
          x: parseInt(parameters[0], 10),
          y: parseInt(parameters[1], 10),
        }
        const orientation = EOrientation.parse(parameters[2])
        PositionService.place(coordinates, orientation)
      }
      break
    case ECommand.MOVE:
      PositionService.move()
      break
    case ECommand.LEFT:
      PositionService.turnLeft()
      break
    case ECommand.RIGHT:
      PositionService.turnRight()
      break
    case ECommand.REPORT:
      console.info(PositionService.report())
      break
    default:
      console.error('ERROR: Command not allowed')
      break
  }
}
