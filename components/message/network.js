const express = require('express');
// const { MongoDriverError } = require('mongodb');
// const response = require('../../network/response');
const MessageService = require('./controller')


function messagesApi(app) {
    const router = express.Router();
    app.use('/api/messages', router);

    const messageService = new MessageService();

    router.get('/', async function (req, res, next) {
        req.query;
        try {
            const message = await messageService.getMessages();

            res.status(200).json({
                data: message,
                alert: 'Message listed'
            }) 
        } catch (err) {
            next(err);
        }
    });

    router.post('/', async function (req, res, next) {
        const request = req.body;
        try {
            const addMessage = await messageService.addMessage(request);

            res.status(201).json({
                data: addMessage,
                alert: 'message created'
            });
        } catch (err) {
            next(err);
        }
    });

    router.put('/:messageId', async function (req, res, next) {
        const { messageId } = req.params;
        const { body: message } = req;

        try {
            const updateMessageId = await messageService.updateMessage({ messageId, message });

            res.status(200).json({
                data: updateMessageId,
                message : 'message was updated'
            });
        } catch (err) {
            next(err);
        }
    });

    router.delete('/:messageId', async function (req, res, next) {
        const { messageId } = req.params;

        try {
            const deleteMessageId = await messageService.deleteMessage({messageId});

            res.status(200).json({
                data: deleteMessageId,
                message: 'message deleted'
            });
        } catch(err) {
            next(err);
        }
    });
}
module.exports = messagesApi;