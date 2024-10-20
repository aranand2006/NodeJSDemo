const express = require('express');
const AuthController = require('../controller/auth.controller');
const router = express.Router();

router.get('/secureapi',AuthController.authUser,(req,res) =>{
    let { user} = req.params
    res.send({success:true,data:`Welcome ${user}`})
})
module.exports = router;