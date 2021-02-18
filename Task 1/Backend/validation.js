const joi = require('@hapi/joi');

// register validation
const registerValidation = (data) => {
    const schema = joi.object({
        name: joi.string(),
        email: joi.string().email(),
        password: joi.string().min(5)
    })

    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = joi.object({
        email: joi.string().email(),
        password: joi.string().min(5)
    })

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;