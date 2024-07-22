const express = require('express');
const Sche = require('./models/schema');
require('./config');
const mongoose= require('mongoose');
const app = express();
const cors = require('cors');

const corsOptions ={
  origin:'https://sujita7.github.io', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(express.json())
//app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/',require('./routes/authroutes'))


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
