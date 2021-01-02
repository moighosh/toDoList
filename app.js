const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();

//Port number

const port = 3000;

//testing server --- might delete later
app.get('/', (req, res)=>{
  res.send("Hello World");
});

app.listen(port,()=>{
  console.log("Server listening on port:" + port);
});
