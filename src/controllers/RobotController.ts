import ECommand from '../typings/enums/ECommand'
import EOrientation from '../typings/enums/EOrientation'

import * as PlayerService from '../services/PlayerService'
import * as PositionService from '../services/PositionService'

/**
 * Send the commands to the Robot.
 *
 * @param command {string}
 * @param parameters {string[]}
 */
export const execute = (command: string, ...parameters: string[]) => {
  const cmd = command.toUpperCase()

  let robot = PlayerService.getCurrentPlayer()

  switch (cmd) {
    case ECommand.PLACE:
      if (parameters.length === 3) {
        const coordinates = {
          x: parseInt(parameters[0], 10),
          y: parseInt(parameters[1], 10),
        }
        const orientation = EOrientation.parse(parameters[2])
        PositionService.place(robot, coordinates, orientation)
      }
      break
    case ECommand.SWITCH:
      PlayerService.switchPlayer()
      break
    case ECommand.MOVE:
      PositionService.move(robot)
      break
    case ECommand.LEFT:
      PositionService.turnLeft(robot)
      break
    case ECommand.RIGHT:
      PositionService.turnRight(robot)
      break
    case ECommand.REPORT:
      PlayerService.reportPlayers()
      break
    default:
      console.error('ERROR: Command not allowed')
  }
}
