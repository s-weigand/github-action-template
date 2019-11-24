import * as core from '@actions/core'

const run = async (): Promise<void> => {
  try {
    const dummy_input = core.getInput('dummy_input')
    console.log(dummy_input)
  } catch (error) {
    core.setFailed(error.message)
  }
}

/* tslint:disable-next-line:no-floating-promises */
run()
