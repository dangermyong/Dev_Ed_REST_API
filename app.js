const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Middlewares
app.use('/posts', () => {
  console.log('This is a middleware running')
});

// ROUTES

//How to start listening to the server
app.get('/', (req, res) => {
  res.send('We are on home');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('Connected to DB!')
});

app.listen(3000);