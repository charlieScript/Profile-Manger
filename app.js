const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// load config
require('dotenv').config();

// port
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('database connected'))
  .then(() => {
    app.listen(PORT);
    console.log('server is started at', PORT);
  })
  .catch((err) => console.log(err));
