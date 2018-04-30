const express = require('express');

//
var app = express();

app.get('/',(req, res)=>{
  res.send('<h1>Hello<h1>');
});

var port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`Server is up and running at ${port}`);
console.log('To stop the server please use ctrl+c');
});