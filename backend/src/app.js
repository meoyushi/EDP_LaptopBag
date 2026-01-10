const express = require('express');
const bagRoutes = require('./routes/bag.routes');
const healthRoutes = require('./routes/health.routes');

const app = express();
app.use(express.json());

app.use('/api/bag', bagRoutes);
app.use('/api/health', healthRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
