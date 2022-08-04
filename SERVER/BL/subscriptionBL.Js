const model = require('../Models/subscriptionModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const memberModel = require('../Models/memberModel')
const movieModel = require('../Models/movieModel')


const getAllSubs = () => {
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


const getAllMoviesSubs = (id) => {
    return new Promise((resolve, reject) => {
        model.find({ MovieId: id }, (err, subs) => {
            if (err) {
                reject(err)
            }
            else {
                const membersArr = []
                subs.map((sub) => {
                    return memberModel.findOne({ _id: sub.MemberId }, (err, data) => {
                        if (err) {
                            reject(err)
                        } else {

                            data && membersArr.push(data)
                            membersArr.length >= subs.length && resolve(membersArr)
                        }

                    })

                })
            }
        })
    })
}


const addSub = async (sub) => {
    return new Promise((resolve, reject) => {
        
            model.findOne({ movieId: sub })
            movieModel.findOne({ Name: sub.Name }, (err, data) => {
                if (err) {
                    reject(err)
                }
                else {
                    if (data) {
                        const su = new model({
                            MovieId: data._id,
                            MemberId: sub.id,
                            Date: sub.Date
                        })
                        su.save((err) => {
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve(`subscriptoin is ok : ${sub.Name} refresh the page to see it`)
                            }
                        })
                    }
                    else {
                        resolve("check your movie name")
                    }
                }
            })
        

    })
}


const updateSub = (id, obj) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate({ _id: ObjectId(id) }, obj, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(`subscription updated!!😃`)
            }
        })
    })
}


const deleteSub = (id) => {
    return new Promise((resolve, reject) => {
        model.deleteMany({ "MemberId": ObjectId(id) }, (err, data) => {
            if (err) {
                reject(err)
            } else {
               
                resolve("delete 😣")
            }
        })
    })
}


module.exports = { getAllSubs, getAllMoviesSubs, addSub, updateSub, deleteSub }