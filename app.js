const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();
const route = require('./routes/route');

//Databse Connection
mongoose.connect('mongodb://localhost:27017/toDoList');
mongoose.connection.on('connected', ()=>{
  console.log('MongoDB connected on Port: 27017');
});

mongoose.connection.on('error', ()=>{
  if(err){
    console.log('The following error caused a failure in connection ------->' + err);
  }
});

//Port number
const port = 3000;

//adding middle-ware

app.use(cors());
app.use(bodyParser.json());

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//routes intialised
app.use('/api', route);

//testing server --- might delete later
app.get('/', (req, res)=>{
  res.send("Hello World");
});

app.listen(port,()=>{
  console.log("Server listening on port:" + port);
});
