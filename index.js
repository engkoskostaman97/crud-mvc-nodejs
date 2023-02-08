//import expreess
const express = require('express');

//import mongoose
const mongoose = require("mongoose")
//import body-parser
const bodyParser = require("express")

//inisiasi express sebagai app
const app = express();

//setting port
const port = 8000;

//import module api route
const apiRouter = require('./api-routes');

//setup default url di root
app.get('/', (req, res) => {
    res.send('hello worlds');
})

//setup body-parser
app.use (bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json());


//api route ke url/api
app.use ("/api", apiRouter);

//connect to mongodb
mongoose.connect("mongodb://localhost/resthub")
const db = mongoose.connection

//launch app with info at console.log
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
})