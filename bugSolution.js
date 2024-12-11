const express = require('express');
const app = express();

// Custom middleware to handle JSON parsing errors
const jsonParser = express.json();
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Invalid JSON:', err.message);
    return res.status(400).send({ error: 'Invalid JSON payload' });
  }
  next();
});

app.use(jsonParser);

app.post('/data', (req, res) => {
  const data = req.body;
  // Perform operations with data here
  res.status(200).send('Data received');
});

app.listen(3000, () => console.log('Server listening on port 3000'));