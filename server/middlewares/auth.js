import jwt from 'jsonwebtoken'

const userAuth= async(req,res,next)=>{
    const {token}=req.headers;
    if (!token){
        return res.json({success:false, message: "Not authorized. Login again!"});
    }
    try {
        const tokenDecode= jwt.verify(token, process.env.JWT_SECRET);
        console.log("tokenDecode", tokenDecode);
        if (tokenDecode.id){
            req.userId=tokenDecode.id;
            console.log("req.userId", req.userId)
        }else{
         return res.json({success:false, message: "Not authorized. Login again!"}); 
        }
        next();

    } catch (error) {
        console.log("error", error);
        res.json({success:false, message:error.message})
    }
}

export default userAuth;
