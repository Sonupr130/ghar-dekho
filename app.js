const express = require('express');
const app = express();
const Listing = require('./models/listing');

const dbConnection = require("./config/database");
dbConnection();

app.get('/', (req, res) => {
    res.send("Hello World!");
});


app.get('/testListing', async (req, res) => {
    const sampleListing = new Listing ({
        title: "Sample Listing",
        description: "This is a sample listing.",
        price: 10000,
        location: "New York",
        country: "India",
    });
    await sampleListing.save();
    console.log("Sample Listing saved");
    res.send("Sample Listing created successfully");
});


app.listen(8080, ()=> {
    console.log("Server is listing on Port 8080 ⭐");
})