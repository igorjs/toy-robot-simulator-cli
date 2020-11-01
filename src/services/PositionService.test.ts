import Robot from '../models/Robot'
import EOrientation from '../typings/enums/EOrientation'
import * as PositionService from '../services/PositionService'

describe('PositionService', () => {
  beforeEach(() => {
    Robot.setPosition = jest.fn().mockImplementation(Robot.setPosition)
  })

  describe('test place method', () => {
    it('places the robot in the specified position', () => {
      PositionService.place({ x: 0, y: 0 }, EOrientation.N)

      expect(Robot.setPosition).toHaveBeenCalled()
      expect(Robot.setPosition).toHaveBeenCalledTimes(1)
      expect(Robot.setPosition).toHaveBeenCalledWith({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.N })
    })

    it('ignore to place the robot outside of the permited area', () => {
      PositionService.place({ x: 10, y: 10 }, EOrientation.N)

      expect(Robot.setPosition).not.toHaveBeenCalled()
      expect(Robot.setPosition).not.toHaveBeenCalledTimes(1)
      expect(Robot.setPosition).not.toHaveBeenCalledWith({ coordinates: { x: 10, y: 10 }, orientation: EOrientation.N })
    })
  })

  describe('test rotate method', () => {
    it('turns the robot to right', () => {
      PositionService.turnRight()

      expect(Robot.setPosition).toHaveBeenCalled()
      expect(Robot.setPosition).toHaveBeenCalledTimes(1)
      expect(Robot.setPosition).toHaveBeenLastCalledWith({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.E })
    })

    it('turns the robot to left', () => {
      PositionService.turnLeft()

      expect(Robot.setPosition).toHaveBeenCalled()
      expect(Robot.setPosition).toHaveBeenCalledTimes(1)
      expect(Robot.setPosition).toHaveBeenLastCalledWith({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.W })
    })
  })

  describe('test move method', () => {
    it('moves the robot one block forward', () => {
      PositionService.move()

      expect(Robot.setPosition).toHaveBeenCalled()
      expect(Robot.setPosition).toHaveBeenCalledTimes(1)
      expect(Robot.setPosition).toHaveBeenLastCalledWith({ coordinates: { x: 0, y: 1 }, orientation: EOrientation.N })
    })
  })

  describe('test report method', () => {
    it('reports the actual position of the robot', () => {
      Robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: undefined, orientation: undefined })
      expect(PositionService.report()).toBe('There is no Robot on the Table.')

      Robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: { x: 0, y: 0 }, orientation: EOrientation.S })
      expect(PositionService.report()).toBe('0,0,SOUTH')

      Robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: { x: 2, y: 4 }, orientation: EOrientation.W })
      expect(PositionService.report()).toBe('2,4,WEST')

      Robot.getPosition = jest.fn().mockReturnValueOnce({ coordinates: { x: 3, y: 3 }, orientation: EOrientation.E })
      expect(PositionService.report()).toBe('3,3,EAST')
    })
  })
})
