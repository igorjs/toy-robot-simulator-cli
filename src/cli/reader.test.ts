import * as mockStdin from 'mock-stdin'
import * as process from 'process'
import * as reader from './reader'

describe('Reader', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('tests create()', (done) => {
    const stdin = mockStdin.stdin()

    const getInputSource = jest.spyOn(reader, 'getInputSource')

    getInputSource.mockReturnValue(process.stdin)

    reader.create((line: string) => {
      expect(reader.getInputSource).toHaveBeenCalled()
      expect(line).toBe('Some Input Text')
      done()
    })

    stdin.send('Some Input Text\n', 'utf-8')
    stdin.end()
  })
})
