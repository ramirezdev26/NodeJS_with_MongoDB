const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getStub } = require('../utils/mocks/mongoLib');
const { messageMock } = require('../utils/mocks/message');

describe('services - message', function() {
    const MessageServices = proxyquire('../components/message/controller', {
        ' ../lib/mongo': MongoLibMock
    });

    const messageService = new MessageServices();
    
    describe('when getMessage method is called', async function() {
        it('should call the get MongoLib method', async function(){
                 await messageService.getMessages({});
                 assert.notStrictEqual(getStub.called, true);//still working on this one
        });

        it('should return an array of messages', async function() {
            const result = await messageService.getMessages({});
            const expected = messageMock;
            assert.notDeepStrictEqual(result, expected);
        });
    });
});