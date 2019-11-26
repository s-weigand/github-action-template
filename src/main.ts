import * as core from '@actions/core'

const run = async (): Promise<void> => {
  try {
    const dummyInput = core.getInput('dummy-input')
    console.log(dummyInput)
  } catch (error) {
    core.setFailed(error.message)
  }
}

/* tslint:disable-next-line:no-floating-promises */
run()
