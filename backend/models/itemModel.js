const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    itemID:{
        type : String,
        required : true
    },
    itemName:{
        type : String,
        required : true
    },
    itemQty:{
        type : Number,
        required : true
    },
    timeCreated : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Item', itemSchema);