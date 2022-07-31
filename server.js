const express = require("express");
const cors = require("cors");

const Line = express();

Line.use(cors());
Line.use(express.json());

Line.post("/api/users",(req , res)=>{
    setTimeout(()=>{
        res.send(req.body)
    },1500)
});

Line.listen("4000" , ()=>{
    console.log("Server Work on Port 4000")
})