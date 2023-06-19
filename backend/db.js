<<<<<<< HEAD
const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(process.env.mongoURL)

module.exports={connection}
=======
const mongoose = require('mongoose');
require('dotenv').config();
const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
>>>>>>> main
