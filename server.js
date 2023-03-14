//DEPENDENCIES
const express = require('express');
const mysql = require('mysql2')

//DATA

//DB CONNECTION
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"movie_db"
},
console.log("db connected"))

//APP/PORT
const app = express();
const PORT = process.env.PORT || 5001;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

//ROUTES
// It's done when the /api/movies route renders a list of all movies.
app.get('/api/movies',(req,res)=>{
    let movies;
    db.query(`SELECT * FROM movies`,(err, result) =>{
        // movies=result;
        // res.json(movies);
        res.json(result)//another way to do it
    })
})

app.get('/api/movie/:id',(req,res)=>{
    const iden = req.params.id;
    //res.json(iden)
    db.query(`SELECT * FROM movies WHERE id = ${iden};`,(err, result) =>{
        res.json(result);
    })
    console.log("api found")
})

// It's done when the /api/add-movie route successfully adds a movie when tested using Insomnia.
app.post('/api/add-movie',(req,res)=>{
    const {movie} = req.body;
    db.query(`INSERT INTO movies(movie_name) VALUES ('${movie}');`,(err, result) =>{
        console.log(result + "added")})
    db.query('SELECT * FROM movies', function (err, results) {
       res.json(results);
      });})


// It's done when the /api/update-review route successfully updates a movie when tested using Insomnia.

// It's done when the /api/movie/:id route deletes a route when tested using Insomnia.
app.delete('/api/movie/:id',(req,res)=>{
    const iden = req.params.id;
    //res.json(iden)
    db.query(`DELETE * FROM movies WHERE id = ${iden};`,(err, result) =>{
        if (err){
            res.json(err);
        }
        console.log("Deleted");
    })
})

app.get("*",(req,res)=>res.status(404).send("Nothing found yet"))

//START THE SERVER(APP)
app.listen(PORT,()=> console.log(`The server is running at http://localhost:${PORT}`))