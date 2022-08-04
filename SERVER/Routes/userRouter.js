
const express=require('express')
const route=express.Router()
const BL=require('../BL/userBL')


route.get('/',  async function (req, res) {
    let allUsers  = await BL.getAllUsers()
     res.json(allUsers)
 })

 route.get('/:name',  async function (req, res) {
    let name  = req.params.name
    let user=await BL.getUserByName(name)
   res.json(user)
 })

 route.post('/',async function(req,res){
    let obj=req.body
    let status=await BL.addUser(obj)
    res.json(status)
})

 route.delete('/:id',async function(req,res){
    let id=req.params.id
    let status=await BL.deleteUser(id)
    res.json(status)
})

module.exports=route