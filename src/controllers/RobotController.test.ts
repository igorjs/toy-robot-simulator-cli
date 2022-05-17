import EOrientation from '../typings/enums/EOrientation'
// import Robot from '../models/Robot'

import * as PlayerService from '../services/PlayerService'
import * as PositionService from '../services/PositionService'
import * as RobotController from './RobotController'

jest.mock('../services/PositionService')
jest.mock('../services/PlayerService')

describe('RobotController', () => {
  beforeAll(() => {
    console.log = jest.fn()
    console.info = jest.fn()
    console.error = jest.fn()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('test execute method', () => {
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
      expect(PositionService.move).toHaveBeenCalledWith()
    })

    it('execute RIGHT command', () => {
      RobotController.execute('RIGHT')

      expect(PositionService.turnRight).toHaveBeenCalled()
      expect(PositionService.turnRight).toHaveBeenCalledTimes(1)
      expect(PositionService.turnRight).toHaveBeenCalledWith()
    })

    it('execute LEFT command', () => {
      RobotController.execute('LEFT')

      expect(PositionService.turnLeft).toHaveBeenCalled()
      expect(PositionService.turnLeft).toHaveBeenCalledTimes(1)
      expect(PositionService.turnLeft).toHaveBeenCalledWith()
    })

    it('execute REPORT command', () => {
      RobotController.execute('REPORT')

      expect(PlayerService.reportCurrentPlayer).toHaveBeenCalled()
      expect(PlayerService.reportCurrentPlayer).toHaveBeenCalledTimes(1)
      expect(PlayerService.reportCurrentPlayer).toHaveBeenCalledWith()
    })

    it('ignore unhandled commands', () => {
      RobotController.execute('XYZ')

      expect(PositionService.move).not.toHaveBeenCalled()
      expect(PositionService.place).not.toHaveBeenCalled()
      expect(PositionService.turnLeft).not.toHaveBeenCalled()
      expect(PositionService.turnRight).not.toHaveBeenCalled()
      expect(PlayerService.reportCurrentPlayer).not.toHaveBeenCalled()
      expect(console.error).toHaveBeenCalledWith('ERROR: Command not allowed')
    })
  })
})
