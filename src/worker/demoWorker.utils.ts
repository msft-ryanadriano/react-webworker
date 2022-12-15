import { proxy, wrap } from 'comlink'
import { MyWorker } from './demoWorker'

export const doLongRunningWork = (callback: (value: string) => void) => {
  const worker = new Worker(new URL('./demoWorker.ts', import.meta.url))
  const workerApi = wrap<MyWorker>(worker)
  workerApi.longRunningWork(proxy((value: string) => {
    callback(value)
    worker.terminate()
  }))
}