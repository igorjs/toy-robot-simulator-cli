import Robot from '../models/Robot'
import EOrientation from '../typings/enums/EOrientation'
import * as PlayerService from './PlayerService'
import * as PositionService from './PositionService'

describe('PositionService', () => {
  beforeAll(() => {
    console.log = jest.fn()
    console.info = jest.fn()

    const robot = new Robot('zig')
    robot.setPosition({ orientation: EOrientation.N, coordinates: { x: 0, y: 0 } })
    robot.setPosition = jest.fn().mockImplementation(robot.setPosition)

    PlayerService.setCurrentPlayer(robot)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('test place method', () => {
    it('places the robot in the specified position', () => {
      PositionService.place({ x: 0, y: 0 }, EOrientation.N)

      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenCalledTimes(1)
      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenCalledWith({
        coordinates: { x: 0, y: 0 },
        orientation: EOrientation.N,
      })
    })

    it('ignore to place the robot outside of the permited area', () => {
      PositionService.place({ x: 10, y: 10 }, EOrientation.N)

      expect(PlayerService.getCurrentPlayer().setPosition).not.toHaveBeenCalled()
      expect(PlayerService.getCurrentPlayer().setPosition).not.toHaveBeenCalledTimes(1)
      expect(PlayerService.getCurrentPlayer().setPosition).not.toHaveBeenCalledWith({
        coordinates: { x: 10, y: 10 },
        orientation: EOrientation.N,
      })
    })
  })

  describe('test rotate method', () => {
    it('turns the robot to right', () => {
      PositionService.turnRight()

      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenCalledTimes(1)
      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenLastCalledWith({
        coordinates: { x: 0, y: 0 },
        orientation: EOrientation.E,
      })
    })

    it('turns the robot to left', () => {
      PositionService.turnLeft()

      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenCalledTimes(1)
      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenLastCalledWith({
        coordinates: { x: 0, y: 0 },
        orientation: EOrientation.W,
      })
    })
  })

  describe('test move method', () => {
    it('moves the robot one block forward', () => {
      PositionService.move()

      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenCalledTimes(1)
      expect(PlayerService.getCurrentPlayer().setPosition).toHaveBeenLastCalledWith({
        coordinates: { x: 0, y: 1 },
        orientation: EOrientation.N,
      })
    })
  })
})
