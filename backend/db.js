const mongoose = require('mongoose');

const connectToMongo = () => {mongoose.connect("").then(() => {
        console.log('Connected to MongoDB');
    })}

module.exports = connectToMongo;
