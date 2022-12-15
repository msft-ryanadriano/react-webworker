import React from 'react';
import './App.css';
import { wrap, proxy } from 'comlink';
import * as Demo from './worker/demo.worker'


const App = () => {
  const [output, setOutput] = React.useState<string>()
  return (<>
    <div>
      <button type='button' onClick={() => console.log('Boop!')}>Boop!</button>
    </div>
    <div>
      <button type='button' onClick={() => {
        const worker = new Worker(new URL('./worker/demo.worker.ts', import.meta.url))
        const workerApi = wrap<Demo.MyWorker>(worker);

        workerApi.doLongRunningWork(proxy((value: string) => {
          console.log(`Received '${value}' from web worker.`)
          setOutput(value)
        }))
      }}>
        Run worker
      </button>
    </div>
    <p>Output: {output}</p>
  </>)
}


export default App;
