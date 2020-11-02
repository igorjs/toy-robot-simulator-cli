import * as message from './message'

describe('Messages', () => {
  beforeAll(() => {
    console.log = jest.fn()
  })

  it('tests printAppName() method', () => {
    message.printAppName()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
  })

  it('tests printAppInfo() method', () => {
    message.printAppInfo()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
  })

  it('tests printCommandList() method', () => {
    message.printCommandList()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(3)
  })

  it('tests printProgramReady() method', () => {
    message.printProgramReady()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(2)
  })

  it('tests printGoodByeMessage() method', () => {
    message.printGoodByeMessage()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
  })
})
