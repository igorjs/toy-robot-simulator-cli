import IPosition from './IPosition'

/**
 * @interface IRobot
 */
interface IRobot {
  setPosition: (position: IPosition) => void
  getPosition: () => IPosition
  isPresent: () => boolean
  getName: () => string
  report: () => string
}

export default IRobot
