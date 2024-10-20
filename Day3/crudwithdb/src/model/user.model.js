const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    },
    hashed_password:{
        type:String
    },
    salt:String
})

UserSchema
    .virtual('password')
    .set(function(password){
        this._password = password
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function(){
        return this._password
    })

UserSchema.methods = {
    makeSalt:function(){
        return Math.round(new Date().valueOf() * Math.random())
    },
    encryptPassword:function(password){
        return crypto.createHmac('sha1',this.salt)
                    .update(password)
                    .digest('hex')

    },
    authenticate:function(password){
        return this.encryptPassword(password) === this.hashed_password
    }
}
const User = mongoose.model("User",UserSchema);
module.exports = User