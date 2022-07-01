const express = require('express');
const app = express();
const jsonData = require("./data")

app.get("/getUser",function(req,res){
    console.log(jsonData.student.fun())
    res.json(jsonData.student)
})

app.get("/",function(req,res){
    res.json(jsonData)
})

app.listen(3693);