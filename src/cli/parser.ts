/**
 * Parses the input string parameter and translate it to real commands.
 *
 * @param input {string}
 */
export const input = (input: string): any => {
  const [args0, args1] = input.split(' ')

  const command = args0?.toUpperCase()?.trim()
  const parameters = args1?.split(',') ?? []

  return { command, parameters }
}
