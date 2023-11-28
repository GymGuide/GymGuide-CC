class Exceptions {
    constructor(statusCode, msg) {
      this.statusCode = statusCode
      this.msg = msg
    }
  
    static invalidRequest(msg) {
      return new Exceptions(400, msg)
    }
  
    static internalError(msg) {
      return new Exceptions(500, msg)
    }
  }
  
  module.exports = Exceptions