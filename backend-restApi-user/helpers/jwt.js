const jwt = require('jsonwebtoken')

module.exports = {
    sign: (payload) => {
        return jwt.sign(
            {data: payload},
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        )
    },
    verify: (payload) => {
        return jwt.verify(payload, process.env.JWT_SECRET)
    }
}