// import mongoose module 
const mongoose = require("mongoose");
// create un shema :
const uniqueValidator = require('mongoose-unique-validator');
const userShema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{ type:String, unique: true},
    Tel:{ type:Number, unique: true},
    pwd:String,
    role:String,
    avatar:String,
    statu:String,
    
});
userShema.plugin(uniqueValidator);
const user = mongoose.model("User",userShema);
module.exports=user;