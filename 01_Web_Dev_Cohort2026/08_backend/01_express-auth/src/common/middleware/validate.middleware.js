import ApiError from "../utils/api-error";

const validate = (DtoClass) =>{
    return (req,_,next) => {
        const {errors,value} = DtoClass.validateData(req.body)
        if(errors){
            throw ApiError.badRequest(errors.join("; "))
        }

        req.body = value
        next()
    }
}
export default validate


// validate = function that RETURNS middleware

// note:
// validate              -------->	    your custom function
// DtoClass.validate()	  -------->     your DTO method
// schema.validate()	  --------->    Joi method


// note:
//1. 
// here req,res,next automatically come from express
// so whenever a request hits your server :
// app.post("/register", validate(registerDto), controller.login)

// it does something like this:
// validate(LoginDto)(req,res,next)

// req ---->  what user request to server
// res   -----> what server send in return 
// next  -----> signal to move to next middleware

//2.
// where does req.body comes from?
// it comes from the express().use(express.json()) or app.use(express.json())
// without this line req.body === undefined
// but with this express parses JSON from request
// store it in req.body
