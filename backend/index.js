const express = require('express');
const db = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');


const connection = db.createConnection({
host: "localhost",
user: "root",
password: "",
database:"users" 
})
// const cors = require('cors')



const app = express();



const  PORT = 3002;

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// // Route to get all posts
// app.get("/api/get", (req,res)=>{
// db.query("SELECT * FROM users", (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
// res.send(result)
// }
//     );   
// });



app.post('/auth', function(request, response) {
    var name = request.body.name;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.name = name;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }           
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get('/home', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.name + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});


// Route for creating the post
app.post('/signup', (req,res)=> {

const name = req.body.name;
const password = req.body.password;

res.render('hi')

console.log(name,password);

connection.query("INSERT INTO users (name , password) VALUES (?,?)",[name , password], (err,result)=>{
   if(err) {
       console.log(err)
   } 
   console.log(result)
}
);   
})

// // Route for like
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
//     console.log(result)
//     }
//     );    
// });

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
//     const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } 
// })
// })


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})