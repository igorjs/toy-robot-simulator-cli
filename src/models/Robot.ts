import IPosition from '../typings/interfaces/IPosition'

/**
 * @export
 * @class Robot
 */
export class Robot {
  private static instance: Robot

  private position: IPosition = { coordinates: undefined, orientation: undefined }

  private constructor() {}

  public static getInstance(): Robot {
    if (!Robot.instance) {
      Robot.instance = new Robot()
    }

    return Robot.instance
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
}

// Export Robot Intance
export default Robot.getInstance()
