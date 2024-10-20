const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

module.exports.authUser = async (req,res,next) => {
    try{
        const bearerHeader = req.headers['authorization'];
        if(!bearerHeader){
            res.status(403).json({success:false,data:'Invalid Token'})
        }
        const bearerArray = bearerHeader.split(' ');
        const bearerToken = bearerArray[1];
        const decoded = jwt.verify(bearerToken,process.env.ACCESS_TOKEN_SECRET);
        console.log('Decoded Token is:',decoded);
        req.params = { user:decoded.user}
        next();
    }
    catch(error){
        res.send({success:false,data:error.message})
    }
}