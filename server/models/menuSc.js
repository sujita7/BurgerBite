const  mongoose  = require('mongoose');

const menuSc=new mongoose.Schema({
    name:String,
    price:Number,
    category:String
});
module.exports= mongoose.model('menu',menuSc);