const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Perform operations with data here. Note: Missing error handling
  res.status(200).send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));