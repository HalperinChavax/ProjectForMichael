const model = require('../Models/memberModel')
const movieModel = require('../Models/movieModel')
const subModel = require('../Models/subscriptionModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId


const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        model.find({}, (err, users) => {
            if (err) {
                reject(err)
            } else {
                resolve(users)
            }
        })
    })
}


const getAllMemberSubs = (id) => {
    return new Promise((resolve, reject) => {
        subModel.find({ MemberId: id }, (err, subs) => {
            if (err) {
                reject(err)
            }
            else {
                const moviesArr = []
                subs.map((sub, index) => {
                    return movieModel.findOne({ _id: ObjectId(sub.MovieId) }, (err, data) => {
                        if (err) {
                            reject(err)
                        } else {
                            if (data.Name != "undefined"||data.Genres=="proxy") {
                                data != null && moviesArr.push(data)
                                moviesArr.length >= subs.length && resolve(moviesArr)
                            }
                         
                        }
                    })
                })
            }
        })
    })
}


const addMember = async (member) => {
    return new Promise((resolve, reject) => {
        const mem = new model({
            Name: member.Name,
            Email: member.Email,
            City: member.City,
        })
        mem.save((err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(`hi member`)
            }
        })
    })
}


const updateMember = (id, obj) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate({ _id: ObjectId(id) }, obj, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(`${data.Name} updated!!😃`)
            }
        })
    })
}


const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndDelete({ _id: id }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                subModel.deleteMany({"MemberId": id }, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    else { resolve("delete from sub") }
                }) 
                resolve(`deleted😪`)
            }

        })
    })
}



module.exports = { getAllMembers, getAllMemberSubs, addMember, updateMember, deleteMember }