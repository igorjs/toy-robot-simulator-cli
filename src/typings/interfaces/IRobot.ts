import IPosition from './IPosition'

/**
 * @interface IRobot
 */
interface IRobot {
  setPosition: (position: IPosition) => void
  getPosition: () => IPosition
  getName: () => string
}

export default IRobot
