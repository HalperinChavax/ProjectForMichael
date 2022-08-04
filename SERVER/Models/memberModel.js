const mongoose=require('mongoose')

let memberSchema=new mongoose.Schema({
   Name:String,
   Email:String,
   City:String
})
module.exports=mongoose.model('member',memberSchema)