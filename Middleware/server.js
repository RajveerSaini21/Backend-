// Middleware is a function which runs between request and response
const express = require("express");
const app = express();

app.use(m1); //---> to run middlware at application level 
app.use(m3); 
app.use(m4)

function m1(req , res , next) {
    console.log("Running Middleware m1 !");
    next() ; 
}
app.use(m2);

function m2(req , res , next) {
    console.log("Running Middleware m2 !");
    next() ; 
}
function m3(req , res , next) {
    console.log("Running Middleware m3 !"); 
    next() ; 
}

function m4(req , res , next) {
    console.log("Running Middleware m4 !"); 
    next() ; 
}
app.get("/", m4 ,(req , res)=> {
    res.send("Running get request on /");
});

app.get("/about", m3 ,(req , res)=> {
    res.send("about page"); 
});


app.listen(4010, ()=>{
    console.log("Server is running...");
});