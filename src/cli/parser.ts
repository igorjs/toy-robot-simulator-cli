import IParameters from '../typings/interfaces/IParameters'

/**
 * Parses the input string parameter and translate it to real commands.
 *
 * @param input {string}
 */
export const input = (input: string, parameterSeparator: string = ','): IParameters => {
  const [arg0, arg1] = input.split(' ')

  const command = arg0.toUpperCase().trim()
  const parameters = arg1?.split(parameterSeparator) ?? []

  return { command, parameters }
}
