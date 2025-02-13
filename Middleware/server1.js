// query parameter
// const express = require("express");
// const app = express();

// app.get("/profile",(req , res)=>{
//     const{username, age} = req.query;
//     console.log(username , age); 
//     res.send("Profile page of"+" "+username+" "+age); 
// })
// app.get("/profile/:id/:username",(req , res)=>{
//     const{id,username} = req.params;
//     console.log(id , username); 
//     res.send("Profile page of"+" "+id+" "+ username); 
// })

// app.listen(2111,(req , res)=>{
//     console.log("Server Created"); 
// })





// const express = require("express"); 
// const app = express() ; 

// let userData = [
//     {
//     id: 1,
//     name: "John",
//     city: "New York"
//     },
//     {
//     id: 2,
//     name: "Jane",
//     city: "Los Angeles"
//     }
// ];

// app.get("/allUsers" , (req , res) =>{
//     res.send(userData) ; 
// })

// app.get("/getUserById" , (req , res) =>{
//     const{id} = req.query; 
//     for(let i = 0 ; i < userData.length ; i++){
//         if(userData[i].id == id){
//             return res.send(userData[i]);
//         }
//     }
//     res.send("User not found");
// })

// app.listen(4050 , ()=>{
//     console.log("server statred"); 
// })




const express = require("express"); 
const app = express(); 


let userData = [
    {
    id: 1,
    name: "John",
    city: "New York"
    },
    {
    id: 2,
    name: "Jane",
    city: "Los Angeles"
    }
];


app.get("/allUsers" , (req , res) =>{
    res.send(userData) ; 
})

app.get("/getuserbyId",(req,res)=>{
    const{id} = req.query;
    for(let i = 0 ; i < userData.length ; i++){
        if(userData[i].id == id){
            return res.send(userData[i]);
        }
    }
    res.send("User not found");
})



app.get("/addUser",(req,res)=>{
    const{id,name,city} = req.query;
    console.log(id,name,city);
    let newUser = {
        id : id,
        name : name,
        city : city
    }
    userData.push(newUser);
    res.send(userData);
    // userData.push({id,name,city});
});


app.listen(4050 , ()=>{
    console.log("server statred"); 
})




// Data are not visible in url in post request