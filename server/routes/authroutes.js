const express = require('express');
const router = express.Router();

const  {test,registerUser,loginUser, getprofile, logout,menubar,menupost,saveorder,getorder} = require('../controllers/authcontroller');


router.get('/',test);

router.post('/signup',registerUser);
router.post('/login',loginUser);
router.get('/profile',getprofile);

router.post('/logout',logout);

router.get('/menu',menubar);

router.post('/menuPost',menupost);

router.post('/order',saveorder);

router.get('/getorder',getorder)

//router.post('/transactions',transactions);

//router.get('/mail',mail)

// router.post('/forgetpassword',forgetpassword);
// router.post('/sendotp',sendotp);

// router.post('/verifyotp',verifyotp);

module.exports = router;