import React from 'react';
import './App.css';
import { doLongRunningWork } from './worker/demoWorker.utils'


const App = () => {
  const [output, setOutput] = React.useState<string>()
  return (<>
    <div>
      <button type='button' onClick={() => console.log('Boop!')}>Boop!</button>
    </div>
    <div>
      <button type='button' onClick={() => {
        doLongRunningWork((value: string) => setOutput(value)) 
      }}>
        Run web worker
      </button>
    </div>
    <p>Output: {output}</p>
  </>)
}


export default App;
