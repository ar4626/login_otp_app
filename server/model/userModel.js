const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please Provide Unique "]
    }
})


module.exports = userSchema;