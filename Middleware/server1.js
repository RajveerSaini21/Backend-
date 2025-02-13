// query parameter
const express = require("express");
const app = express();

// app.get("/profile",(req , res)=>{
//     const{username, age} = req.query;
//     console.log(username , age); 
//     res.send("Profile page of"+" "+username+" "+age); 
// })
app.get("/profile/:id/:username",(req , res)=>{
    const{id,username} = req.params;
    console.log(id , username); 
    res.send("Profile page of"+" "+id+" "+ username); 
})

app.listen(2111,(req , res)=>{
    console.log("Server Created"); 
})


//params