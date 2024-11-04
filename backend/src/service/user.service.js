const Users = require("../model/userdb");
const bcrypt=require("bcrypt");
const jwtProvider=require("../config/jwtProvider.js")
const  createUser=async(userData)=>{
    try{
        let{firstName,lastName,email,password}=userData;
        const isUserExist=await Users.findOne({email});
        if(isUserExist){
            throw new Error("user already exist with this email:",email)
        }
        password=await bcrypt.hash(password,8);
        const user =await Users.create({
            firstName,
            lastName,
            email,
            password
        })
        console.log("create user",user)
        return user;
    }catch(error){
            throw new Error(error.message);
    }
}
const findUserById=async(userId)=>{
    try{
        const user=await Users.findById(userId).populate("address")
        if(!user){
            throw new Error("user not found",user);
        }
        return user; 
    }
    catch(error){
        throw new Error(error.message);
    }
}

const getUserByEmail=async(email)=>{
    try{
        const user=await Users.findOne(email)
        if(!user){
            throw new Error("user not found",user);
        }
        return user;
    }
    catch(error){
        throw new Error(error.message);
    }
}
const getUserProfileByToken=async(token)=>{
    try{
        const userId=jwtProvider.genUserIdFromToken(token);
        const user=await findUserById(userId)
        if(!user){
            throw new Error("user not found");
        }
        return user;
    }catch(error){
        throw new Error(error.message);
    }
}
const getAllUsers=async()=>{
    try{
        const users =await Users.find();
        return users;
    }catch(error){
        throw new Error(error.message);
    }
}
module.exports={createUser,getUserByEmail,findUserById, getUserProfileByToken,getAllUsers};

