import { loadConfig } from '../src/load-config'

const testEnvVars = {
  'INPUT_DUMMY-INPUT': 'foo'
}

describe('Reading of the config', () => {
  beforeEach(() => {
    for (const key in testEnvVars) {
      process.env[key] = testEnvVars[key as keyof typeof testEnvVars]
    }

    process.stdout.write = jest.fn()
  })

  afterEach(() => {
    for (const key in testEnvVars) Reflect.deleteProperty(testEnvVars, key)
  })

  it('test config values', () => {
    const config = loadConfig()
    expect(config).toEqual({ dummy_input: 'foo' })
  })
})
