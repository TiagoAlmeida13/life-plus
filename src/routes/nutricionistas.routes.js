const router = require('express-promise-router')();
const nutricionistasController = require('../controllers/nutricionistas.controller');

// ==> Definindo as rotas do CRUD - 'Nutricionistas':

// ==> Rota responsável por criar um novo 'Nutricionista': (POST):  localhost:3000/nutricionistas/nutricionista
router.post('/nutricionistas', nutricionistasController.createNutricionista);

// ==> Rota responsável por listar todos os 'Nutricionistas': (GET) localhost:3000/nutricionistas/nutricionista
router.get('/nutricionistas', nutricionistasController.listAllNutricionistas);

// ==> Rota responsável por selecionar 'Nutricionista' por ID: (GET) localhost:3000/nutricionistas/nutricionista/:id
router.get('/nutricionistas/:id', nutricionistasController.findNutricionistasById);

// ==> Rota responsável por atualizar 'Nutricionista' por ID: (PUT) localhost:3000/nutricionistas/nutricionista/:id
router.put('/nutricionistas/:id', nutricionistasController.updateNutricionistasById);

// ==> Rota responsável por deletar um 'Nutricionista' pelo ID: (DELETE) localhost:3000/nutricionistas/products/:id
router.delete('/nutricionistas/:id', nutricionistasController.deleteNutricionistaById);

module.exports = router;