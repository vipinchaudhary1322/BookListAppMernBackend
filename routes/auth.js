const {verify, decode} = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const auth = (req,res,next)=>{
    try{
        const authStr = req.headers.authorization;
        if(!authStr){
            return res.status(401).json({
                status: "failed",
                message:"Secure way provide token"
            });
        }
        const accToken = authStr.split(" ")[1];
        const decoded = verify(accToken,SECRET);
        req.payload = {userId: decoded.userId, username: decoded.username};
         next();
    }catch(err){
            if(err.name === "JsonWebTokenError"){
                return res.status(401).json({
                    status:"failed",
                    message:err.message
                })
            }

            res.status(500).json({
                status:"failed",
                message:"Server Error",
                error:err.message
            })
    }
}

module.exports = auth ;