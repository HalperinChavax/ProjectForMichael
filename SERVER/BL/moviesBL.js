const model = require('../Models/movieModel')
const jFile = require("jsonfile")
const path = require("path")
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const subModel = require('../Models/subscriptionModel')
const memberModel = require('../Models/memberModel')

//happend for one time to get the movies from json!!!
// const jsonFile = path.join(__dirname, "/../shows.json")
// const getAllMoviesFromJson = () => {
//     return new Promise((resolve, reject) => {
//         jFile.readFile(jsonFile, (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }


const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        model.find({}, (err, movies) => {
            if (err) {
                reject(err)
            } else {
                resolve(movies)
            }
        })
    })
}


const getMovieByName = async (name) => {
    return new Promise((resolve, reject) => {
        model.findOne({ Name: name }, (err, movie) => {
            if (err) {
                reject(err)
            } else {
                resolve(movie)
            }
        })
    })
}


const addMovie = async (movie) => {
    return new Promise((resolve, reject) => {
        const mov = new model({
            Name: movie.Name,
            YearPremiered: movie.YearPremiered,
            Genres: movie.Genres,
            ImageUrl: movie.ImageUrl
        })
        mov.save((err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(`hi ${data.Name}`)
            }
        })
    })
}


const updateMovie = (id, obj) => {
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


const deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndDelete({ _id: id }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                subModel.findOneAndDelete({ "MovieId": id }, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve("delete from sub")
                    }
                })
                resolve(`deleted😪`)

            }
            resolve(`deleted😪`)
        })
    })

}


module.exports = { getAllMovies, getMovieByName, addMovie,updateMovie, deleteMovie }