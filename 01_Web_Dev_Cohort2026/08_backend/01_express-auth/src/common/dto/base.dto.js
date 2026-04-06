import joi from "joi";

class BaseDto {
  static schema = joi.object({});

  static validateData(data) {
    const { error, value } = this.schema.validate(data, {   // destructuring
      abortEarly: false, // when true, stops validation on the first error, otherwise returns all the errors found.  // show all errors
      stripUnknown: true, // remove extra unknown fields not in schema



       //   error: ...,  // if validation fails
      //   value: ...   // cleaned/validated data


    //   this  === BaseDto
    // if inherited then --->  this === current class (not object)
    });

    if (error) {
      const errors = error.details.map((e) => e.message); // detail - array of errors
      return { errors, value: null };
    }
    return { errors: null, value };
  }
}

export default BaseDto


//note:
//1. This is
const { error, value } = this.schema.validate(data);

// just simple JS destructuring:
const result = this.schema.validate(data)
const error1 = result.error
const value1 = result.value


//2.
// this.schema.validate
// when for example: RegisterDto is called like RegisterDto.validateData(...) , then "this" ===  RegisterDto