const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const messagesApi = require('./components/message/network');
app.use(express.json());

messagesApi(app);


app.listen(3000, function() {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});
