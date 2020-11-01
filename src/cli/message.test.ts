import * as message from './message'

describe('Messages', () => {
  beforeAll(() => {
    console.log = jest.fn()
  })

  it('tests printAppName()', () => {
    message.printAppName()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
  })

  it('tests printAppInfo()', () => {
    message.printAppInfo()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
  })

  it('tests printCommandList()', () => {
    message.printCommandList()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(3)
  })

  it('tests printGoodByeMessage()', () => {
    message.printGoodByeMessage()

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
  })
})
