import * as parser from './parser'

describe('Parser', () => {
  beforeAll(() => {
    console.log = jest.fn()
    console.info = jest.fn()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('tests input() with no command', () => {
    const { command, parameters } = parser.input('')

    expect(command).toBe('')
    expect(parameters).toStrictEqual([])
    expect(parameters.length).toBe(0)
  })

  it('tests input() with a space', () => {
    const { command, parameters } = parser.input(' ')

    expect(command).toBe('')
    expect(parameters).toStrictEqual([''])
    expect(parameters.length).toBe(1)
  })

  it('tests input() with a command only', () => {
    const { command, parameters } = parser.input('ThisIsAcommand')

    expect(command).toBe('THISISACOMMAND')
    expect(parameters).toStrictEqual([])
    expect(parameters.length).toBe(0)
  })

  it('tests input() with a command and one parameter', () => {
    const { command, parameters } = parser.input('ThisIsAcommand ThisIsAParameter')

    expect(command).toBe('THISISACOMMAND')
    expect(parameters[0]).toBe('ThisIsAParameter')
    expect(parameters.length).toBe(1)
  })

  it('tests input() with a command and multiple parameters', () => {
    const { command, parameters } = parser.input('ThisIsAcommand ThisIsAParameter1,ThisIsAParameter2,ThisIsAParameter3')

    expect(command).toBe('THISISACOMMAND')
    expect(parameters[0]).toBe('ThisIsAParameter1')
    expect(parameters[1]).toBe('ThisIsAParameter2')
    expect(parameters[2]).toBe('ThisIsAParameter3')
    expect(parameters.length).toBe(3)
  })
})
