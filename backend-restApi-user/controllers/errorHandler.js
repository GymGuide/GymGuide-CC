const Exceptions = require('../exceptions')

module.exports = {
    errorHandler: (err, req, res, next) => {
        console.log(err)
        if (err instanceof Exceptions) {
          return res.status(err.statusCode)
            .json({
              error: true,
              message: err.msg
            })
        }
      }
}