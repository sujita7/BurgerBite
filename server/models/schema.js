const mongoose= require('mongoose');
const proSc= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports= mongoose.model('login',proSc);