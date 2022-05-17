/**
 * @enum ECommand
 * @prop SWITCH {string} SWITCH
 * @prop PLACE {string} PLACE
 * @prop ADD {string} ADD
 * @prop MOVE {string} MOVE
 * @prop LEFT {string} LEFT
 * @prop RIGHT {string} RIGHT
 * @prop REPORT {string} REPORT
 */
enum ECommand {
  SWITCH = 'SWITCH',
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  ADD = 'ADD',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
  REPORT_ALL = 'REPORTALL',
}

export default ECommand
