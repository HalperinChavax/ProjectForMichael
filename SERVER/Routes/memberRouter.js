const express = require('express')
const route = express.Router()
const BL = require('../BL/memberBl')


route.get('/', async function (req, res) {
    let allMembers = await BL.getAllMembers()
    res.json(allMembers)
})

route.get('/:id', async function (req, res) {
    let id = req.params.id
    let allSubs = await BL.getAllMemberSubs(id)
    res.json(allSubs)
})

route.post('/', async function (req, res) {
    let obj = req.body
    let status = await BL.addMember(obj)
    res.json(status)
})

route.put('/:id',async function(req,res){
    let id=req.params.id
    let obj=req.body
    let status=await BL.updateMember(id,obj)
    res.json(status)
})

route.delete('/:id', async function (req, res) {
    let id = req.params.id
    let status = await BL.deleteMember(id)
    res.json(status)
})


module.exports = route