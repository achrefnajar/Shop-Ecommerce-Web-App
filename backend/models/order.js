// import mongoose module 
const mongoose = require("mongoose");
// create un shema
const orderShema = mongoose.Schema({
    qty: Number,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
    annonceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Annonce"
        },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
});

const order = mongoose.model("Order",orderShema);
module.exports=order;