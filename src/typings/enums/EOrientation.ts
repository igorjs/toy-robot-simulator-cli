/**
 * @enum EOrientation
 * @prop N {string} North
 * @prop S {string} South
 * @prop E {string} East
 * @prop W {string} West
 */
enum EOrientation {
  N = 'NORTH',
  S = 'SOUTH',
  E = 'EAST',
  W = 'WEST',
}

namespace EOrientation {
  export function parse(key: string = ''): EOrientation {
    const value = key?.toUpperCase()
    return (<any>EOrientation)[value[0]]
  }
}

export default EOrientation
