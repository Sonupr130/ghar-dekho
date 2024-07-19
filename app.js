const express = require('express');
const app = express();


const dbConnection = require("./config/database");
dbConnection();

app.get('/', (req, res) => {
    res.send("Hello World!");
}) 

app.listen(8080, ()=> {
    console.log("Server is listing on Port 8080 ⭐");
})