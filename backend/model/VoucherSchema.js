const mongoose = require("mongoose");
const VoucherSchema =
    new mongoose.Schema({
        displayName:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true
        },
        type:{
            type:String,
        }
    });
module.exports = mongoose.model('voucher',VoucherSchema);