// Dependencies 

const mongoose =  require ("mongoose");
const logger = require ("morgan");
const express = require ("express");

// Running and connecting express app

const app = express ()
const PORT = process.env.PORT || 8080

// 
app.use(logger("dev"));

// Express app used to handle data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Mongo database
mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/custommethoddb", {useNewUrlParser}

// Spinning up server to listen 
console.log(`App listening on Port ${PORT}!`);




