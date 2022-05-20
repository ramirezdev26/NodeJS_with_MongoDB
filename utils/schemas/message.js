const joi = require('@hapi/joi');

const messageIdSchema = joi.string().regex(/^[0-9-a-fA-F]{24}$/);
const messageUserSchema = joi.string().max(80);
const messageSchema = joi.string();

const createMessageSchema = {
    user: messageUserSchema.required(),
    message: messageSchema.required()
}

const updateMessageSchema = {
    user: messageUserSchema,
    message: messageSchema
}

module.exports = {
    messageIdSchema,
    createMessageSchema,
    updateMessageSchema
};