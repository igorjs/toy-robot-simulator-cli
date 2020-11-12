import { addFixedObstacle, validateCoordinates } from './CollisionDetectionService'

describe('CollisionDetectionService', () => {
  describe('test addFixedObstacle method', () => {
    beforeAll(() => {
      addFixedObstacle({ x: 3, y: 3 })
    })

    it('should collide the coordinate with an obstacle', () => {
      const coordinates = { x: 3, y: 3 }

      expect(validateCoordinates(coordinates)).toBe(false)
    })

    it('should NOT collide the coordinate with an obstacle', () => {
      const coordinates = { x: 4, y: 4 }

      expect(validateCoordinates(coordinates)).toBe(true)
    })
  })
})
