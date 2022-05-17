import IRobot from '../typings/interfaces/IRobot'
import IPosition from '../typings/interfaces/IPosition'

/**
 * @export
 * @class Robot
 */
export default class Robot implements IRobot {
  private name: string = ''
  private position: IPosition = { coordinates: undefined, orientation: undefined }

  constructor(name: string) {
    this.name = name
  }

  /**
   * Set the robot position.
   *
   * @param position {IPosition}
   */
  public setPosition(position: IPosition): void {
    this.position = position
  }

  /**
   * Get the robot actual position
   *
   * @returns IPosition
   */
  public getPosition(): IPosition {
    return this.position
  }

  public getName(): string {
    return this.name
  }

  public isPresent(): boolean {
    return this.name !== '' && !!this.position.coordinates && !!this.position.orientation
  }

  public report(): string {
    const { coordinates, orientation } = this.position

    if (coordinates && orientation) {
      return `${this.name} is ${coordinates?.x},${coordinates?.y},${orientation}`
    }

    return `${this.name} is not in the arena yet!`
  }
}
