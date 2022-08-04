const mongoose=require('mongoose')


let movieSchema=new mongoose.Schema({
    Name:String,
    YearPremiered:String,
    Genres:[String],
    ImageUrl:String
})
module.exports=mongoose.model('movie',movieSchema)