import * as fs from 'fs'
import * as process from 'process'
import * as readline from 'readline'

/**
 * Create a terminal reader interface.
 *
 * @param input {string}
 */
export const create = (
  onReadLine: (line: string, tty: readline.Interface) => void,
  exitOnClose: boolean = false
): any => {
  const argv = process.argv[2] // See commands.txt file

  const tty = readline.createInterface({
    input: argv ? fs.createReadStream(argv) : process.stdin,
    output: process.stdout,
    terminal: true,
  })

  tty.prompt(true)

  tty.on('line', (line: string) => {
    onReadLine(line, tty)
  })

  tty.on('close', () => {
    if (exitOnClose) process.exit(0)
  })

  return { tty, argv }
}
