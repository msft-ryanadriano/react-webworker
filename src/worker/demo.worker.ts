import { expose } from 'comlink'
import { doLongRunningWork } from '../longRunningWork'

const exports = {
  doLongRunningWork
}

// create the public facing api type
export type DemoWorker = typeof exports

expose(exports)