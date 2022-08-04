const express=require('express')
const route=express.Router()
const BL=require("../BL/authinticationBL")


 route.post('/',async function(req,res){
    let allUser=req.body
    let status=await BL.getSameUser(allUser)
   //  if (status == "not existed") {
   //       res.status(401)
   //  } else {
   //      res.status(200).json({msg: status})
   //  }
     res.json(status)
})

module.exports=route