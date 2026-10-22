const mongoose = require("mongoose")

const candleSchema = new mongoose.Schema({
    candleName:{
        type: String,
        required : true
    },
    candlePrice:{
        type: Number,
        required : true
    },
    scent:{
        type: String,
        required : true
    },
    shelfLife:{
        type: String,
        required : true
    },
    images:{
        type: Array,
        required : true
    },
    burnTime:{
        type: String
    },
    weight:{
        type: String
    },
    reviews:{
        type: String,
    },
    features:{
        type : Array
    },
    description:{
        type: String
    },
    rating:{
        type:Number
    },
    stock:{
        type: Number,
        required: true, 
        default: 0
    }
})
const candles = mongoose.model('candles',candleSchema)
module.exports = candles
