import EOrientation from '../enums/EOrientation'

import ICoordinate from '../interfaces/ICoordinate'

/**
 * @interface IPosition
 * @prop coordinates: ICoordinate
 * @prop orientation: EOrientation
 */
interface IPosition {
  readonly coordinates?: ICoordinate
  readonly orientation?: EOrientation
}

export default IPosition
