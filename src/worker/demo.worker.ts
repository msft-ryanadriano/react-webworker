import { expose } from 'comlink'
import { doLongRunningWork } from '../utils/longRunningWork'

const exports = {
  doLongRunningWork
}

// create the public facing api type
export type MyWorker = typeof exports

expose(exports)