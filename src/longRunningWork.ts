export const doLongRunningWork = () => {
  console.log('Starting long running work...')
  const delayInSeconds = 5
  const start = new Date().getTime()
  const delayInMs = delayInSeconds * 1000

  while (true) {
    if (new Date().getTime() - start > delayInMs) {
      break;
    }
  }
  console.log('Finished long running work!')
}