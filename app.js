
const http = require('http');
const express = require('express');
const app=express();
const server = http.createServer(app);
app.use((res,req,next) =>{
    console.log("this is a middleware");
    next()
});
app.use((res,req,next) =>{
    console.log("this is a another middleware");
});

server.listen(3000);
