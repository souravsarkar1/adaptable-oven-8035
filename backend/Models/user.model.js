<<<<<<< HEAD
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name :String,
    email : String,
    password : String
},{
    versionKey:false
})
const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}
=======
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    pass: { type: String, require: true },
    city: { type: String, require: true },
    age: { type: Number, require: true },
}, {
    versionKey: false
})

const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel };
>>>>>>> main
