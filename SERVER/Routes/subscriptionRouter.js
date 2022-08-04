const express=require('express')
const route=express.Router()
const BL=require('../BL/subscriptionBL')


route.get('/',  async function (req, res) {
    let allSubs  = await BL.getAllSubs()
     res.json(allSubs)
 })

 route.get('/:id',  async function (req, res) {
    let id  = req.params.id
    let sub=await BL.getAllMoviesSubs(id)
   res.json(sub)
 })

route.post('/',async function(req,res){
    let obj=req.body
    let status=await BL.addSub(obj)
    res.json(status)
})

route.put('/:id',async function(req,res){
    let id=req.params.id
    let obj=req.body
    let status=await BL.updateSub(id,obj)
    res.json(status)
})

route.delete('/:id',async function(req,res){
    let id=req.params.id
    let status=await BL.deleteSub(id)
    res.json(status)
})



module.exports=route