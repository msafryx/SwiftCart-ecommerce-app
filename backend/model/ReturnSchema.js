const mongoose = require("mongoose");
const ReturnSchema =
    new mongoose.Schema({
        order:{
            type:Object,
            required:true
        },
        reason:{
            type:String,
            required:true
        },
        status:{
            type:String, // PENDING, CANCELLED, COMPLETED
            required:true
        },
        returnProcess:{
            type:Array, // processed Date
        },
        requestedDate:{
            type:Date,
            required:true
        },
        completedData:{
            type:String, // refund or new product
            required:true
        }
    });
module.exports = mongoose.model('return',ReturnSchema);