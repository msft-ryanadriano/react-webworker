# Getting Started with Web Worker

This is a demo React app that contains a simple implementation of Web Workers. Web Workers allows code to be executed in the background without affecting the performance of the main thread.

## Code

File | Description
------ | ------
`/src/utils/longRunningWork.ts` | Contains the utility function that simulates a long running task.
`/src/worker/demoWorker.ts` | Contains the type definition for the `longRunningWork` method
`/src/worker/demoWorker.utils.ts` | Contains a method that wraps the setup code needed to be able to call the web worker and executes the `longRunningWork` method. 
`/src/worker/tsconfig.json` | `tsconfig` overrides that adds the `webworker` entry to the target runtime's bundled libraries (`lib`)
`/src/App.tsx` | The main demo page that contains buttons for comparing/testing the Web Worker against a `Promise` implementation

Know that the worker gets terminated right after the callback and we'll need a better exception handling.

## Questions (follow up)
1. How do we manage the web worker runtime? Does it terminate after navigating to another website (e.g. google.com)?

## Learn More

You can learn more Web Workers in the [MDN Web Worker documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).