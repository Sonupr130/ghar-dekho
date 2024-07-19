const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        default: "https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg",
        type: String,
        set: (value) => value === "" ? "https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg" : value,
    },
    price: Number,
    location: String,
    country: String,
})

module.exports = mongoose.model("Listing", listingSchema);