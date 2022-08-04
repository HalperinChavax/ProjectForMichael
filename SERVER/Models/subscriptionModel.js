const mongoose=require('mongoose')

let subscriptionSchema=new mongoose.Schema({
    MovieId:String,
    MemberId:String,
    Date:String
})
module.exports=mongoose.model('subscription',subscriptionSchema)