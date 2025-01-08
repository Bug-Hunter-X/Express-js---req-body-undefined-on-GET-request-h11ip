const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is where the error occurs
  res.send(req.body);
});
app.listen(3000, () => console.log('Server listening on port 3000'));