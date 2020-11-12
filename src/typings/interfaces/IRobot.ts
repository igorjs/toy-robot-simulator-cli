import IPosition from './IPosition'

/**
 * @interface IRobot
 */
interface IRobot {
  setPosition: (position: IPosition) => void
  getPosition: () => IPosition
}

export default IRobot
