const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017//Pin")

mongoose.connect("mongodb+srv://sujitakri07:5FRQqdP9yufQv3ks@cluster0.vxgzgwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Database Connected'))
  .catch((err) => console.error('Database connection error:', err));