const { body, validationResult } = require('express-validator');
const rules = {};

// Post validation rules
rules.userValidationRules = () => {
    return [
        body('email', 'Email is required').isEmail(),
        body('firstName', 'Name is required').isLength({min: 2}),
        body('lastName', 'Last name is required').isLength({min: 2}),
        body('favoriteColor', 'Please include a color (this field cannot be empty)').notEmpty(),
        body('birthday', 'Please enter a valid date').isDate(),
    ]
};

rules.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next();
    };
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.path]: err.msg}))

    return res.status(422).json( {
        errors: extractedErrors,
    })
}
rules.validateID = () => {
    return [
        body('_id', 'Invalid ID').isMongoId()
    ]
}

module.exports = rules;