const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/page1',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/page1.html'))        
});


router.get('/page2',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/page2.html'))        
});

router.get('/page3',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/page3.html'))        
});
module.exports = router;