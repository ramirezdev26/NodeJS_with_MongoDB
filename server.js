const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messagesApi = require('./components/message/network');
const { logError, errorHandler, wrapError } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
// body parse
app.use(express.json());

// routes
messagesApi(app);

// Catch error 404
app.use(notFoundHandler);
// Errors middleware
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(3000, function() {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});
