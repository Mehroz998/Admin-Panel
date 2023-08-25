const mongoose = require('mongoose');

const userdataSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address:String,
    userId:String
});

module.exports = mongoose.model("usersdata",userdataSchema);