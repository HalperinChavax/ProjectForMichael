const express=require('express')
const route=express.Router()
const BL=require('../BL/moviesBL')

//happend 1 time!!
// const getMovies = async (req, res, next) => {
//     let movies=[]
//     if (movies.length > 0) {
//         console.log("there are movies")
//         next()
//     }
//     else {
//         movies= await BL.getAllMoviesFromJson()
//         let status=BL.createMovie(movies)
//         return res.json(status)
//     }
// }

route.get('/',  async function (req, res) {
    let allMovies  = await BL.getAllMovies()
     res.json(allMovies)
 })

 route.get('/:name',  async function (req, res) {
    let name  = req.params.name
     let movie=await BL.getMovieByName(name)
   res.json(movie)
 })

route.post('/',async function(req,res){
    let obj=req.body
    let status=await BL.addMovie(obj)
    res.json(status)
})

route.put('/:id',async function(req,res){
    let id=req.params.id
    let obj=req.body
    let status=await BL.updateMovie(id,obj)
    res.json(status)
})

route.delete('/:id',async function(req,res){
    let id=req.params.id
    let status=await BL.deleteMovie(id)
    res.json(status)
})


module.exports=route