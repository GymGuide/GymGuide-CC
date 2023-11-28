const {Storage} = require('@google-cloud/storage')
const dateFormat = require('date-format')
const pathKey = require('../serviceAccountKey')

const gcs = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: pathKey
})

const bucketName = process.env.BUCKET_NAME
const bucket = gcs.bucket(bucketName)

module.exports = {
    imgPublicUrl: (fileName) => {
        return 'https://storage.googleapis.com/' + bucketName + '/' + fileName;
    },
    imgUpload: (image) => {
        const fileName = dateFormat('hh:mm:ss.SSS', new Date()) +"-"+ image.name
        bucket.upload(image, {
            destination: fileName,
        })
        return imgPublicUrl(fileName)
    },
    imgDelete: (fileName) => {
        gcs.bucket(bucketName).file(fileName).delete()
    }
}


