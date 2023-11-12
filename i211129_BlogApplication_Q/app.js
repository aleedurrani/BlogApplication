const mongoose = require('mongoose');
const express= require("express");
const bodyParser = require('body-parser');
const authController = require('./controller/authorization');
const userController = require('./controller/user');
const blogController= require('./controller/blogpost');
const interactionController= require('./controller/interaction');
const searchController= require('./controller/search');
const adminController = require('./controller/admin');

const app= express();
app.use(bodyParser.json());

app.use('/auth', authController);
app.use('/user', userController);
app.use('/admin', adminController);
app.use('/blog', blogController);
app.use('/interaction', interactionController);
app.use('/search',searchController);




mongoose.connect('mongodb://127.0.0.1:27017/BlogApplication').then(()=>{
    console.log("Connected to Mongo DB")
}).catch(err=>{
    console.log(err)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });




