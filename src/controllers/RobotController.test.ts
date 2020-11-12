import EOrientation from '../typings/enums/EOrientation'
import * as PositionService from '../services/PositionService'
import * as RobotController from './RobotController'

jest.mock('../services/PositionService')

describe('RobotController', () => {
  describe('test execute method', () => {
    beforeAll(() => {
      console.info = jest.fn()
      console.error = jest.fn()
    })

    it('execute PLACE command', () => {
      const parameters = ['0', '0', 'NORTH']

      RobotController.execute('PLACE', ...parameters)

      expect(PositionService.place).toHaveBeenCalled()
      expect(PositionService.place).toHaveBeenCalledTimes(1)
      expect(PositionService.place).toHaveBeenCalledWith({ x: 0, y: 0 }, EOrientation.N)
    })

    it('execute MOVE command', () => {
      RobotController.execute('MOVE')

      expect(PositionService.move).toHaveBeenCalled()
      expect(PositionService.move).toHaveBeenCalledTimes(1)
    })

    it('execute RIGHT command', () => {
      RobotController.execute('RIGHT')

      expect(PositionService.turnRight).toHaveBeenCalled()
      expect(PositionService.turnRight).toHaveBeenCalledTimes(1)
    })

    it('execute LEFT command', () => {
      RobotController.execute('LEFT')

      expect(PositionService.turnLeft).toHaveBeenCalled()
      expect(PositionService.turnLeft).toHaveBeenCalledTimes(1)
    })

    it('execute REPORT command', () => {
      const spy = jest.spyOn(console, 'info')

      RobotController.execute('REPORT')

      expect(spy).toHaveBeenCalled()
      expect(PositionService.report).toHaveBeenCalled()
      expect(PositionService.report).toHaveBeenCalledTimes(1)

      spy.mockClear()
    })

    it('ignore unhandled commands', () => {
      const spy = jest.spyOn(console, 'error')

      RobotController.execute('XYZ')

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith('ERROR: Command not allowed')
      expect(PositionService.move).not.toHaveBeenCalled()
      expect(PositionService.place).not.toHaveBeenCalled()
      expect(PositionService.report).not.toHaveBeenCalled()
      expect(PositionService.turnLeft).not.toHaveBeenCalled()
      expect(PositionService.turnRight).not.toHaveBeenCalled()

      spy.mockClear()
    })
  })
})
