const mongoose = require('mongoose');

const { MongoMemoryServer } = require('mongodb-memory-server');



async function connect(){
    const mongodb = await MongoMemoryServer.create();
    const getURI =  mongodb.getUri();

    // mongoose.set('setQuery', true); 
    const db = await mongoose.connect(getURI);
    console.log("Database connected")
    return db;
}


module.exports = connect;