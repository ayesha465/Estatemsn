var mongoose = require('mongoose');

//const jwt = require('jsonwebtoken');

require("dotenv").config();
var cors = require('cors')

var userSchema = mongoose.Schema({
    
    Username:{
        type: String,
        required:true
    },
    
   
   Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    
});

var Users = mongoose.model('User', userSchema);
module.exports =Users;