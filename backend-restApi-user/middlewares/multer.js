const multer = require('multer')
const storage = multer.memoryStorage()
const uploadProfile = multer({storage: storage}).single('photoProfile')
module.exports = {
    uploadProfile
}