//DEPENDENCIES
const express = require('express');
const mysql = require('mysql2')

//DATA

//DB CONNECTION
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:" ",
    database:"movie_db"
},
console.log("db connected"))

//APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

//ROUTES
// It's done when movie_db is created and contains a movies and reviews table.

// It's done when movie_db has been seeded with data.

// It's done when the /api/movies route renders a list of all movies.

// It's done when the /api/add-movie route successfully adds a movie when tested using Insomnia.

// It's done when the /api/update-review route successfully updates a movie when tested using Insomnia.

// It's done when the /api/movie/:id route deletes a route when tested using Insomnia.

app.get("*",(req,res)=>res.status(404).send("Nothing found yet"))

//START THE SERVER(APP)
app.listen(PORT,()=> console.log(`The server is running at https://localhost:${PORT}`))