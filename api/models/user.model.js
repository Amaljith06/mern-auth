import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        reuired: true,
        unique: true,
    },
    email:{
        type: String,
        reuired: true,
        unique: true,
    },
    password:{
        type: String,
        reuired: true,
    }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);;

export default User;