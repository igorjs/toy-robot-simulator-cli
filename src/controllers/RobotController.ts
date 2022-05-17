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

  switch (cmd) {
    case ECommand.ADD:
      if (parameters.length === 1) {
        const playerName = String(parameters[0])
        PlayerService.addPlayer(playerName)
      }
      break
    case ECommand.SWITCH:
      PlayerService.switchPlayer()
      break
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
      PlayerService.reportCurrentPlayer()
      break
    case ECommand.REPORT_ALL:
      PlayerService.reportAllPlayers()
      break
    default:
      console.error('ERROR: Command not allowed')
  }
}
