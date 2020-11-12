import Robot from '../models/Robot'
import EOrientation from '../typings/enums/EOrientation'
import * as PositionService from '../services/PositionService'

describe('PositionService', () => {
  beforeEach(() => {
    const robot = Robot.getInstance()
    robot.setPosition = jest.fn().mockImplementation(robot.setPosition)
  })

  describe('test place method', () => {
    it('places the robot in the specified position', () => {
      const robot = Robot.getInstance()

      PositionService.place(robot, { x: 0, y: 0 }, EOrientation.N)

      expect(robot.setPosition).toHaveBeenCalled()
      expect(robot.setPosition).toHaveBeenCalledTimes(1)
      expect(robot.setPosition).toHaveBeenCalledWith({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.N })
    })

    it('ignore to place the robot outside of the permited area', () => {
      const robot = Robot.getInstance()

      PositionService.place(robot, { x: 10, y: 10 }, EOrientation.N)

      expect(robot.setPosition).not.toHaveBeenCalled()
      expect(robot.setPosition).not.toHaveBeenCalledTimes(1)
      expect(robot.setPosition).not.toHaveBeenCalledWith({ coordinates: { x: 10, y: 10 }, orientation: EOrientation.N })
    })
  })

  describe('test rotate method', () => {
    it('turns the robot to right', () => {
      const robot = Robot.getInstance()

      PositionService.turnRight(robot)

      expect(robot.setPosition).toHaveBeenCalled()
      expect(robot.setPosition).toHaveBeenCalledTimes(1)
      expect(robot.setPosition).toHaveBeenLastCalledWith({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.E })
    })

    it('turns the robot to left', () => {
      const robot = Robot.getInstance()

      PositionService.turnLeft(robot)

      expect(robot.setPosition).toHaveBeenCalled()
      expect(robot.setPosition).toHaveBeenCalledTimes(1)
      expect(robot.setPosition).toHaveBeenLastCalledWith({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.W })
    })
  })

  describe('test move method', () => {
    it('moves the robot one block forward', () => {
      const robot = Robot.getInstance()

      PositionService.move(robot)

      expect(robot.setPosition).toHaveBeenCalled()
      expect(robot.setPosition).toHaveBeenCalledTimes(1)
      expect(robot.setPosition).toHaveBeenLastCalledWith({ coordinates: { x: 0, y: 1 }, orientation: EOrientation.N })
    })
  })

  describe('test report method', () => {
    it('reports the actual position of the robot', () => {
      const robot = Robot.getInstance()

      robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: undefined, orientation: undefined })
      expect(PositionService.report(robot)).toBe('There is no Robot on the Table.')

      robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.S })
      expect(PositionService.report(robot)).toBe('0,0,SOUTH')

      robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: { x: 2, y: 4 }, orientation: EOrientation.W })
      expect(PositionService.report(robot)).toBe('2,4,WEST')

      robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: { x: 3, y: 3 }, orientation: EOrientation.E })
      expect(PositionService.report(robot)).toBe('3,3,EAST')
    })
  })
})
