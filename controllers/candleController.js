const candles = require('../models/candleModel')

//add candle
exports.addCandleController = async (req,res) => {
    console.log("Inside addCandleController");
    const {candleName,candlePrice,scent,shelfLife,images,burnTime,weight,reviews,features,
        description,rating,stock} = req.body
    try{
        const existingCandle = await candles.findOne({candleName})
        if(existingCandle){
            res.status(409).json("Product already exists.....")
        }
        else{
            const newCandle = new candles ({candleName,candlePrice,scent,shelfLife,images,burnTime,weight,reviews,
                features,description,rating,stock})
            await newCandle.save()
            res.status(200).json(newCandle)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}