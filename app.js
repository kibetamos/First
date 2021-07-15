
const express = require("express");
const app = express();
const catMe = require('cat-me');
const lodash = require('lodash');


app.get("/",function (req,res){
    res.send("welcome to my website");
});
app.get("/hello",function (req, res){
    res.send("Hell  welcome here");
});
 app.get("/game/:gameTitle",function(req,res){
res.send("enjoy the game " + req.params.gameTitle);
 });
app.get("*", function(red, res){
    res.send("no one is here");
});
// console.log(lodash.add(5,6);

app.listen(3000, function(){ 
    console.log("Example app listening on port 3000!");
});