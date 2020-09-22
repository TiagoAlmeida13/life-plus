const express = require('express');
const cors = require('cors');

const app = express();

//Rotas da API

const index = require('./routes/index');
const nutricionistasRoute = require('./routes/nutricionistas.routes');
const pacientesRoute = require('./routes/pacientes.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/nutricionistas/', nutricionistasRoute);
app.use('/pacientes', pacientesRoute);

module.exports = app;