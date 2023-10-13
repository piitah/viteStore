const joi = require("@hapi/joi");

const regiserValidation = (data) => {
    const schema = joi.object({
        name : joi.string().min(6).required(),
        email : joi.string().min(8).required().email(),
        password : joi.string().min().required()
    })
    return schema.validate(data)
}

const loginValidtion = (data) => {
    const schema = joi.object({
        name : joi.string().min(6).required(),
        password : joi.string().min().required()
    })
    return schema.validate(data)
}

module.exports.regiserValidation = regiserValidation
module.exports.loginValidtion = loginValidtion