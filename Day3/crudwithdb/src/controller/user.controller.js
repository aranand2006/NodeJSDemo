let User = require('../model/user.model');
let jwt  = require("jsonwebtoken");
let dotenv = require("dotenv");
dotenv.config();
module.exports.signUp = async(req,res) =>{
    try{
        let { username,email,password} = req.body;
        let user = new User({username,email,password});
        let createdUser = await user.save();
        res.send({success:true,data:createdUser})
    }
    catch(error){
        res.send({success:false,data:error.message})
    }
}
module.exports.signIn = async(req,res) =>{
    try{
        let { email,password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            res.send({success:false,data:'User does not exist'})
        } else{
            if(!user.authenticate(password)){
                res.send({suceess:false,data:'Incorrect Password'})
            } else {
                //res.send({success:true,data:`Welcome ${user.username}`})
                const token = jwt.sign({user:user.username},process.env.ACCESS_TOKEN_SECRET)
                res.send({success:true,data:token})
            }
        }
    }
    catch(error){
        res.send({success:false,data:error.message})
    }
}