import EOrientation from '../typings/enums/EOrientation'
import * as PositionService from '../services/PositionService'

import * as RobotController from './RobotController'

jest.mock('../services/PositionService')

describe('RobotController', () => {
  describe('test execute method', () => {
    it('execute PLACE command', async () => {
      const parameters = ['0', '0', 'NORTH']

      RobotController.execute('PLACE', ...parameters)

      expect(PositionService.place).toHaveBeenCalled()
      expect(PositionService.place).toHaveBeenCalledTimes(1)
      expect(PositionService.place).toHaveBeenCalledWith({ x: 0, y: 0 }, EOrientation.N)
    })

    it('execute MOVE command', async () => {
      RobotController.execute('MOVE')

      expect(PositionService.move).toHaveBeenCalled()
      expect(PositionService.move).toHaveBeenCalledTimes(1)
    })

    it('execute RIGHT command', async () => {
      RobotController.execute('RIGHT')

      expect(PositionService.turnRight).toHaveBeenCalled()
      expect(PositionService.turnRight).toHaveBeenCalledTimes(1)
    })

    it('execute LEFT command', async () => {
      RobotController.execute('LEFT')

      expect(PositionService.turnLeft).toHaveBeenCalled()
      expect(PositionService.turnLeft).toHaveBeenCalledTimes(1)
    })

    it('execute REPORT command', async () => {
      console.info = jest.fn() // hide console messages

      RobotController.execute('REPORT')

      expect(PositionService.report).toHaveBeenCalled()
      expect(PositionService.report).toHaveBeenCalledTimes(1)
    })

    it('ignore unhandled commands', async () => {
      console.error = jest.fn() // hide console messages

      RobotController.execute('XYZ')

      expect(PositionService.move).not.toHaveBeenCalled()
      expect(PositionService.turnRight).not.toHaveBeenCalled()
      expect(PositionService.turnLeft).not.toHaveBeenCalled()
      expect(PositionService.report).not.toHaveBeenCalled()
      expect(PositionService.place).not.toHaveBeenCalled()
    })
  })
})
