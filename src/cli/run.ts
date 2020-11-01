import * as parser from './parser'
import * as message from './message'
import * as terminal from './terminal'

import * as RobotController from '../controllers/RobotController'

const run = () => {
  const { tty, argv } = terminal.create()

  console.clear()

  if (!argv) {
    message.printAppName()
    message.printAppInfo()
    message.printCommandList()
  }

  tty.prompt(true)

  tty.on('line', (line: string) => {
    if (line.length === 0) return

    if (line.toLowerCase() === 'help') {
      message.printCommandList()
    } else {
      const { command, parameters } = parser.input(line)
      RobotController.execute(command, ...parameters)
    }

    tty.prompt(true)
  })

  tty.on('close', () => {
    if (!argv) {
      console.clear()
      message.printGoodByeMessage()
    }
    process.exit(0)
  })
}

export default run
