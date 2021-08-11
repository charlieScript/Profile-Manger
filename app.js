const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// load config
require('dotenv').config();

// port
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.use('/user', require('./routes/user'))