const userService=require("../service/user.service");
const jwtProvider=require("../config/jwtProvider");
const cartService=require("../service/cart.service")
const register=async(req,res)=>{

    try{
        const user=await userService.createUser(req.body);
        const jwt=jwtProvider.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(200).send({jwt,message:"register success"})

    }catch(error){

    }
}

const login=async(req,res)=>{
    const {password,email}=req.body;
    try{
        const user=await userService.getUserByEmail(email);

        if(!user){
            return res.status(400).send({message:"invalid email "})
        }
        const isValidPassword=await bcrypt.compare(password,user.password);

        if(!isValidPassword){
            return res.status(400).send({message:"invalid password "})
        }

        const jwt=jwtProvider.generateToken(user._id);
        return res.status(200).send({
            jwt,message:"login success"
        })
    }catch(error){
        return res.status(400).send({message:"invalid email or password"})
    }
}

module.exports={register,login};