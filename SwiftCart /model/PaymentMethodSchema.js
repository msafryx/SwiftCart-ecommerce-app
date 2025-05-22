const mongoose = require("mongoose");
const PaymentMethodSchema =
    new mongoose.Schema({
        user:{
            type:String,
            required:true,
        },
        cardInfo:{
            type:Object,
        },
        isPrimary:{
            type:Boolean,
            required:true
        }
    });
module.exports = mongoose.model('paymentMethod',PaymentMethodSchema);