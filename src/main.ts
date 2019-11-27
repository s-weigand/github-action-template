import * as core from '@actions/core'
import { loadConfig } from './load-config'

export const run = async (): Promise<void> => {
  try {
    const config = loadConfig()
    console.log(config)
  } catch (error) {
    core.setFailed(error.message)
  }
}
