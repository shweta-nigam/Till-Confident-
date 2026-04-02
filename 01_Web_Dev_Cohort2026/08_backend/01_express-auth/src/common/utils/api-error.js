class ApiError extends Error {
    constructor(statuscode, message){
        super(message) // super(message) calls parent (Error) constructor
        this.statuscode = statuscode;
        this.isOperational = true // search more // imp
        Error.captureStackTrace(this,this.constructor);
    }

    static badRequest(message = "Bad request"){
        return new ApiError(400, message)
    }
    static unauthorized(message = "Unauthorized"){
        return new ApiError(401, message)
    }
    static conflict(message = "Conflict"){
        return new ApiError(409, message)
    }
    static forbidden(message = "forbidden"){
        return new ApiError(412, message)
    }
    static notFound(message = "not found"){
        return new ApiError(404, message)
    }
}

// export  ApiError ---> wrong   --- export  {ApiError} ---> right 
export default ApiError 



// note:
//1. this.isOperational = true
// -- A production concept
// true = Expected errors (user input, validation)
// false = Unexpected (bugs, crashes)