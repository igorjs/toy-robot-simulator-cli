import Robot from '../models/Robot'
import EOrientation from '../typings/enums/EOrientation'
import * as PlayerService from './PlayerService'

describe('PlayerService', () => {
  beforeAll(() => {
    console.log = jest.fn()
    // console.info = jest.fn()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('addPlayer', () => {
    // TODO
  })

  describe('setCurrentPlayer', () => {
    // TODO
  })

  describe('getCurrentPlayer', () => {
    // TODO
  })

  describe('getOtherPlayers', () => {
    // TODO
  })

  describe('switchPlayer', () => {
    // TODO
  })

  describe('test report method', () => {
    it('reports the actual position of the robot', () => {
      // TODO
    })
  })
})
