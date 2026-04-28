export class ApiError extends Error {
    public statusCode: number;
    public success:boolean
    constructor(message : string = "Something went wrong", statusCode : number, success = false) {
        super(message );

        this.statusCode = statusCode
        this.success = success
        
        this.name = this.constructor.name

        // Fix prototype chain
        Object.setPrototypeOf(this, new.target.prototype)

        Error.captureStackTrace(this, this.constructor)
    }
}