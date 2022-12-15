import { expose } from 'comlink'
import { longRunningWork } from '../utils/longRunningWork'

const exports = {
  longRunningWork
}

// create the public facing api type
export type MyWorker = typeof exports

expose(exports)