const {hash, compare} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt')
//const{imgPublicUrl, imgUpload, imgDelete} = require('../helpers/googleStorage')

const {User} = require('../models')
const Exceptions = require('../exceptions')
class Authentication {
    static async register (req, res, next) {
        try {
            const {username, email, password} = req.body
            const passwordHash = hash(password)
            await User.create({username : username, email: email, password: passwordHash})
            return res.status(201).json({
                error: false,
                message: "User Created",
            })
        } catch (err) {
            console.log(err.message)
            next(Exceptions.internalError(err.message))
        }
    }

    static async login (req, res, next) {
        try {
            const {email, password : plainText} = req.body
            console.log(plainText)
            const validateEmail = await User.findOne({where: {email: email}})
            if(!validateEmail) next(Exceptions.invalidRequest("Wrong Email"))

            const validatePassword = compare(plainText, validateEmail.password)
            if(!validatePassword) next(Exceptions.invalidRequest("Wrong Password"))

            const token = sign({id: validateEmail.id, email: validateEmail.email})

            return res.status(200).json({
                error: false,
                message: `Welcome ${validateEmail.username} Login Success`,
                data: {
                    userId: validateEmail.id,
                    name: validateEmail.username,
                    token: token,
                },
            })
        } catch(err) {
            console.log(err.message)
            next(Exceptions.internalError(err.message))
        }
    }
}

module.exports = Authentication