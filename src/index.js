const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user');
require('./db/mongoose');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(port, () => {
  console.log('Server running on Port: ' + port);
});