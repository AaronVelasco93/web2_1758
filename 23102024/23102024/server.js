const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/pages");

const app = express();
const port = 3025;

app.use(express.static('public'));
app.use('/',pagesRoutes);

app.get('/',(req,res)=>{
        res.redirect('/page1');
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});

