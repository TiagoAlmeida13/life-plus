const router = require('express-promise-router')();
const pacientesController = require('../controllers/pacientes.controller');

// ==> Definindo as rotas do CRUD - 'pacientes':

// ==> Rota responsável por criar um novo 'paciente': (POST):  localhost:3000/pacientes/paciente
router.post('/pacientes', pacientesController.createPaciente);

// ==> Rota responsável por listar todos os 'pacientes': (GET) localhost:3000/pacientes/paciente
router.get('/pacientes', pacientesController.listAllpacientes);

// ==> Rota responsável por selecionar 'paciente' por ID: (GET) localhost:3000/pacientes/paciente/:id
router.get('/pacientes/:id', pacientesController.findpacienteById);

// ==> Rota responsável por atualizar 'paciente' por ID: (PUT) localhost:3000/pacientes/paciente/:id
router.put('/pacientes/:id', pacientesController.updatepacienteById);

// ==> Rota responsável por deletar um 'paciente' pelo ID: (DELETE) localhost:3000/pacientes/products/:id
router.delete('/pacientes/:id', pacientesController.deletepacienteById);

module.exports = router;