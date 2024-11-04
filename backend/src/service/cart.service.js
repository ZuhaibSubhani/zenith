const Cart =require("../model/cart");

async function createCart(user){
   try{ const cart =new Cart({user});
    const createdCart=await cart.save();
    return createdCart;
}catch(error){
    throw new Error(error.message);
}
}

module.exports={createCart};