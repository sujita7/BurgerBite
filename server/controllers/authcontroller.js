const proSc = require("../models/schema");
const User = require("../models/user");
const { error } = require("console");
const validator = require("validator");
const { comparePassword, hashPassword } = require("../auth");
const { errorMonitor } = require("events");
const jwt = require("jsonwebtoken");
const menuSc = require("../models/menuSc");
const orderSc = require("../models/orderSc");
require('dotenv').config();



const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, password } = req.body;
    // console.log(email);
    // Check if firstName and lastName were entered
    if (!name || !email) {
      return res.json({
        error: "First name and last name are required",
      });
    }

    // Check password length
    if (!validator.isLength(password, { min: 8, max: 20 }) || !password) {
      return res.json({
        error: "Password must be between 8 and 20 characters long.",
      });
    }

    // Check email
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({
        error: "Email is already taken",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })
    return res.json(user);
  }
  catch (error) {
    console.error(error);
    return res.json({
      error: "An error occured in while registering the user"
    });
  };
}



const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    const match = await comparePassword(password, user.password)
    if (match) {
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName
        },
        process.env.JWT_SECRET,
        {},
        (error, token) => {
          if (error) throw error;

          // res.cookie("token", token, {
          //   httpOnly: true,
          //   secure: true,
          //   sameSite: "none",
          // })
            res.json({ status: "Ok", data: token, user });
        }
      );
    } else {
      res.json({
        error: " Password does not match ",
      });
    }
  } catch (error) {
    console.error(error);
    return res.json({
      error: "An error occurred while logging in ",
    });
  }
};

const getprofile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (error, user) => {
      if (error) throw error;
      try {
        const userData = await User.findOne({ _id: user.id });
        if (!userData) {
          return res.status(404).json({ error: "User not found" });
        }
        const userProfile = {
          _id: userData._id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          walletBalance: userData.walletBalance,
        };
        res.json(userProfile);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ error: "An error occurred while fetchting the user profile " });
      }
    });
  } else {
    res.json(null);
  }
};

const logout = (req, res) => {
  res.cookie("token", "", { expire: new Date(0) });
  res.status(200).json({ message: "Logged out succrssfully" })
};

const menupost= async()=>{
  const items = [
    { name: 'Espresso', price: 2.5, category: 'Beverages' },
    { name: 'Latte', price: 3.5, category: 'Beverages' },
    { name: 'Cappuccino', price: 3.0, category: 'Beverages' },
    { name: 'Muffin', price: 2.0, category: 'Snacks' },
    { name: 'Bagel', price: 1.5, category: 'Snacks' }
  ];
  await menuSc.insertMany(items);
};

const menubar =async(req,res)=>{
  try{
    const menuitems = await menuSc.find();
    res.json(menuitems);
  }catch(err){
    res.status(500).send(err.message);
  }
}

const saveorder=async(req,res)=>{
  try{
    const {name,price,category,quantity}= req.body;
    const order = await orderSc.create({
      name,
      price,
      category,
      quantity,
    })
    return res.json(order);
  }catch(err){
    res.status(500).send(err.message);
  }
};


const getorder =async(req,res)=>{
  try{
    const orders = await orderSc.find();
    res.json(orders);
  }catch(err){
    res.status(500).send(err.message);
  }
}


// const transactions = async(req,res)=>{
  
// };


// const mail= async(req,res)=>{
  
// }


module.exports = {
  test,
  registerUser,
  loginUser,
  getprofile,
  logout,
  menubar,
  menupost,
  saveorder,
  getorder,
};