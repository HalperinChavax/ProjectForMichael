const model = require('../Models/userModel')


const getSameUser = (user) => {
    return new Promise((resolve, reject) => {
        model.findOne({ "UserName": user.UserName, "Password": user.Password }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                if (data == null || data.length == 0) {
                    resolve("not existed")
                } else {
                    resolve("hello " + data.UserName)
                }
            }
        })
    })
}

module.exports = { getSameUser }