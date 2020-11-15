import IPosition from './IPosition'

/**
 * @interface IRobot
 */
interface IRobot {
  setPosition: (position: IPosition) => void
  getPosition: () => IPosition
  isPresent: () => boolean
  getName: () => string
}

export default IRobot
