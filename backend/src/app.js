const express = require('express');
const cors = require('cors');
const dbConnect = require('./middlewares/dbConnect');
const routes = require('./routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true, mensaje: 'Expediente Abierto API' }));
app.use('/api', dbConnect, routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
