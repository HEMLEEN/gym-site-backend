const express = require('express');
const bodyParser = require ('body-parser');
require('dotenv').config();
require('colors');
const {errorHandlers} = require('./middlewares/errorHandlers');
const connectDB =require ('./dbconfig/db.config');

const app = express();
const port = process.env.PORT || 5000;
connectDB()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(errorHandlers);
app.use("/api", require("./routes/routers"));

app.listen(port, ()=>{
    console.log(`server has been started at, ${port.cyan.underline}`)
})


