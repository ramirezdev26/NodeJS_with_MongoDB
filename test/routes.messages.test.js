const assert = require('assert');
const proxyquire = require('proxyquire');

const { messageMock, MessageServiceMock } = require('../utils/mocks/message');
const testServer = require('../utils/testServer');

describe('routes - message', function() {
    const route = proxyquire('../components/message/network', {
        ' ../components/message': MessageServiceMock
    });

    const request = testServer(route);
    describe('GET /messages', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/messages').expect(200, done);
        });
       
        it('should respond with the list of messages', function(done) {
            request.get('/api/messages').end((err, res) => {
                assert.notDeepStrictEqual(res.body, {
                    data: messageMock,
                    alert: 'Message listed'
                });
                
                done()
            });
        });
    });
});