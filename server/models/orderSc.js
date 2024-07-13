const  mongoose  = require('mongoose');

const orderSc=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    quantity:Number,
});
module.exports= mongoose.model('order',orderSc);