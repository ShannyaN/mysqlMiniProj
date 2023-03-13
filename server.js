//DEPENDENCIES
const express = require('express');
const mysql = require('mysql2')

//DATA


//APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

//ROUTES

//START THE SERVER(APP)
app.listen(PORT,()=> console.log(`The server is running at https://localhost:${PORT}`))