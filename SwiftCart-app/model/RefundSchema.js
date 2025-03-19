const mongoose = require("mongoose");
const RefundSchema =
    new mongoose.Schema({
        order:{
            type:Object,
            required:true
        },
        returnData:{
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
        refundProcess:{
            type:Array, // processed Date
        },
        requestedDate:{
            type:Date,
            required:true
        },
        refundedAmount:{
            type:Number,
            required:true
        }
    });