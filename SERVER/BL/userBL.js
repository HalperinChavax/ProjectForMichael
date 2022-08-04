const model = require('../Models/userModel')


const getAllUsers = () => {
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


const getUserByName = async (name) => {
    return new Promise((resolve, reject) => {
        model.findOne({ "FullName": name }, (err, user) => {
            if (err) {
                reject(err)
            } else {
                resolve(user)
            }
        })
    })
}


const addUser = async (user) => {
    return new Promise((resolve, reject) => {
        const use = new model({
            FullName: user.FullName,
            UserName: user.UserName,
            Password: user.Password,
        })
        use.save((err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(`hi ${data.FullName}`)
            }
        })
    })
}


const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndDelete({ _id: ObjectId(id) }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(`${data.FullName} deleted😪`)
            }
        })
    })
}


module.exports = { addUser, getAllUsers, getUserByName, deleteUser }