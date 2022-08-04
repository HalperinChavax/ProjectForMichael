const mongoose=require('mongoose')

let userSchema=new mongoose.Schema({
    FullName:String,
    UserName:String,
    Password:String
})
module.exports=mongoose.model('user',userSchema)