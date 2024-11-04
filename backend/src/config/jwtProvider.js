const jwt=require("jsonwebtoken");
const JWT_SECRET="rsfdrdardv"

const generateToken=(userId)=>{
    const token=jwt.sign({userId},JWT_SECRET,{expiresIn:"48h"})
    return token;
}
const genUserIdFromToken=(token)=>{
    const decoded=jwt.verify(token,JWT_SECRET);
    return decoded.userId;
}
module.exports={
    generateToken,
    genUserIdFromToken
}