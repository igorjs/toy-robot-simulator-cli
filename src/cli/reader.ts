import * as fs from 'fs'
import * as process from 'process'
import * as readline from 'readline'

/**
 * Get the right input source based on argv.
 */
export const getInputSource = (): NodeJS.ReadStream | fs.ReadStream => {
  const argv = process.argv[2] // See commands.txt file
  return argv ? fs.createReadStream(argv) : process.stdin
}

/**
 * Create a terminal reader interface.
 *
 * @param input {string}
 */
export const create = (onReadLine: (line: string, tty: readline.Interface) => void): void => {
  const tty = readline.createInterface({
    input: getInputSource(),
    output: process.stdout,
    terminal: true,
  })

  tty.prompt(true)

  tty.on('line', (line: string) => {
    onReadLine(line, tty)
  })
}
