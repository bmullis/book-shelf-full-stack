const express = require('express');
const cors = require('cors');
const path = require('path')
const userRouter = require('./routes/user');
require('./db/mongoose');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Server running on Port: ' + port);
});