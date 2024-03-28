const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
});

const UserModel = mongoose.model("users", userSchema);
exports.UserModel = UserModel;

exports.validUser = (_bodyData) => {
    let joiSchema = Joi.object({
        firstName: Joi.string().min(2).max(99).required(),
        lastName: Joi.string().min(2).max(99).required(),
        phone: Joi.string().min(10).max(80).required(),
        email: Joi.string().min(1).max(80).required(),
    })

    return joiSchema.validate(_bodyData);
}