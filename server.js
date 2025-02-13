const express = require("express") ;
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 3019 ; 

app.use(express.static(__dirname)); //middleware (7-types)

app.get("", (req , res)=>{
    // res.send("<h1>Server created...</h1>");
    res.sendFile(path.join(__dirname, "form.html"));
})

app.get("/home" , (req , res) =>{
    res.send("<h1>Home page</h1>");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})