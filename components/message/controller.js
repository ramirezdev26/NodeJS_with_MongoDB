// const store = require('./store');
const MongoLib = require('../../lib/mongo');

class MessageService{
    constructor() {
        this.collection = 'message';
        this.mongoDB = new MongoLib;
    }

    async addMessage(data) {
        console.log(data);
        const addMessageUser = await this.mongoDB.create(this.collection, data);
        return addMessageUser    
    }
    
    

    async getMessages() {
        const messages = await this.mongoDB.getAll(this.collection);
        return messages || [];
    }
}


module.exports = MessageService;