const express = require('express');

const mongoose = require('mongoose');
const api  = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    try{
        message:"the message is try to confirm that hte servers is running"
    }
    catch(error){
        console.log("there is some error in connecting the things to sever");
    }
})
app.get("/signup",(req,res)=>{
    
})