import { cyan, green } from 'chalk'
import { log } from 'console'

import * as fs from 'fs'
import * as process from 'process'
import * as readline from 'readline'

/**
 * Create a tty interface to listen from StdIn.
 */
export const create = (): any => {
  const argv = process.argv[2]

  const processStdInReadStream = argv ? fs.createReadStream(argv) : process.stdin

  const tty = readline.createInterface({
    input: processStdInReadStream,
    output: process.stdout,
    terminal: true,
  })

  log(cyan('Press CTRL+C (Windows/Linux) or Cmd+C (MacOS) to finalise this program.\n'))
  log(green('Start typing the commands:\n'))

  return { tty, argv }
}
