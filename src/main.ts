import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const dummy_input = core.getInput('dummy_input')
  } catch (error) {
    core.setFailed(error.message)
  }
}

/* tslint:disable-next-line:no-floating-promises */
run()
