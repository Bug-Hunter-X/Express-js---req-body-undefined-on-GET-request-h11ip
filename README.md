# Express.js - req.body undefined on GET Request

This repository demonstrates a common error in Express.js applications where developers attempt to access `req.body` in a GET request handler.  `req.body` is only populated for requests that send data in the request body (like POST, PUT, PATCH). GET requests typically only use query parameters.

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express`.
4. Run `node bug.js`.
5. Send a GET request to `http://localhost:3000/`.  You'll see the application crash.

## Solution

The solution involves checking if the request method is appropriate for accessing `req.body`, or using query parameters for GET requests.