const bcrypt = require('bcrypt')

module.exports = {
     hash:  (plainText) =>  {
        return bcrypt.hashSync(plainText, 10)
    },
    compare: (plainText, password) => {
        console.log(plainText + password)
        return bcrypt.compareSync(plainText, password)
    }
}