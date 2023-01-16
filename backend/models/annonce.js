const mongoose = require("mongoose");


const annonceShema = mongoose.Schema({
    description:String,
    price:Number,
    qty:Number,
    userId:String,
    date:String,
    category:String,
    avatar:String,
});
const annonce = mongoose.model("Annonce",annonceShema);
module.exports=annonce;