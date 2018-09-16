const Users = require('../models/users')

exports.getAllUsers = (request, response) => {
    var query = Users.find()
    console.log(request.query)
    query.exec((error, users) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(users)
    })
}

exports.postNewUsers = (request, response) => {
    console.log(request.body)
    let user = new Users({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        passwordExpiry: request.body.passwordExpiry,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        gender: request.body.gender,
        photo: request.body.photo,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt
    })
    user.save().then((user) => {
        console.log('User Added Successfully')
        response.json(user)
    })
}

exports.updateUser = (request, response) => {
        const {
            username,
            email,
            password,
            passwordExpiry,
            firstName,
            
            lastName,
            gender,
            photo,
            createdAt,
            updatedAt
        } = request.body

        Users.updateOne({
                    _id: request.params.id,
                },
                {
                    username,
                    email,
                    password,
                    passwordExpiry,
                    firstName,
                    
                    lastName,
                    photo,
                    updatedAt
                },

                {},

                (error, q) => {
                    if (error)
                        response.json({
                            error: error,
                            status: 500
                        })
                    response.json(Users)
                })
    }

    exports.delUsersById = (request, response) => {
    Users.findOneAndDelete({
        _id: request.params.id
    }, (error, deleteId) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json({
            message: "deleted successfully"
        })
    })

}