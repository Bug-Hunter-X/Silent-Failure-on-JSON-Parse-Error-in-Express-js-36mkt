# Silent Failure on JSON Parse Error in Express.js
This repository demonstrates a common, yet subtle, error in Express.js applications: the silent failure when parsing JSON request bodies.  The provided `bug.js` file showcases the problem, while `bugSolution.js` offers a robust solution.

## Problem
The `bug.js` example uses `express.json()` middleware to parse incoming JSON data. However, it lacks error handling for scenarios where the request body is not valid JSON.  This results in a silent failure—no error messages are logged, and the request simply fails without notification.

## Solution
The `bugSolution.js` file demonstrates how to properly handle JSON parsing errors using a custom middleware function. This middleware intercepts errors thrown by `express.json()` and responds with appropriate error codes and messages, preventing silent failures and improving application stability.

## How to run
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js` to experience the silent failure scenario.  Send an invalid JSON payload (e.g., a string) to the `/data` endpoint.
5. Run `node bugSolution.js` to observe the improved error handling.  Repeat the invalid JSON payload test.