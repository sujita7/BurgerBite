const User = require('../models/user');
const OTP = require('../models/otp');
const nodemailer = require("nodemailer");

//forget password mail
const forgetpassword = async(req,res)=>{
    const {email} = req.body;
    try{
        //generate unique token
        const otp = Math.floor(100000 + Math.random() + 900000);

        const newOtp = new OTP({
            email,
            otp,
        });

        //associate the reset token with the user's email
        const user=await User.findOne({email})
        console.log(user);
        if(user){
            await newOtp.save();
        }

        

    } catch(error){

    }
}