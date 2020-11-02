import * as parser from './parser'
import * as reader from './reader'
import * as message from './message'

import * as RobotController from '../controllers/RobotController'

const main = () => {
  console.clear()
  message.printAppName()
  message.printAppInfo()
  message.printCommandList()
  message.printProgramReady()

  reader.create((line, tty) => {
    if (/help/i.test(line)) {
      message.printCommandList()
    } else if (/(quit|exit)/i.test(line)) {
      message.printGoodByeMessage()
      tty.close()
    } else if (line.length > 0) {
      const { command, parameters } = parser.input(line)
      RobotController.execute(command, ...parameters)
    } else {
      return
    }

    tty.prompt(true)
  }, true)
}

export default main
