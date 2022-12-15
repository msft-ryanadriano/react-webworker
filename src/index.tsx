import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { wrap } from 'comlink';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const doLongRunningWorkWithWorker = () => {
  const worker = new Worker(new URL('./worker/demo.worker.ts', import.meta.url), {
    type: 'module'
  })
  const workerApi = wrap<import('./worker/demo.worker').DemoWorker>(worker);
  workerApi.doLongRunningWork()
}

doLongRunningWorkWithWorker()