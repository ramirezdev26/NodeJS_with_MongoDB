const sinon = require('sinon');

const { messageMock } = require('./message');

const getStub = sinon.stub();
getStub.withArgs('message').resolves(messageMock);

const createStub = sinon.stub().resolves(messageMock[0].id);

class MongoLibMock {
    get(collection, query) {
        return get(collection, query);
    }

    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getStub,
    createStub,
    MongoLibMock
}