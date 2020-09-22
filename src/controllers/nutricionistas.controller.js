const db = require('../config/database');

//Método responsavel por criar um novo nutricionista:

exports.createNutricionista = async (req, res) => {
    const {nome, telefone, nasc_dt, email, endereco} = req.body;
    const { rows } = await db.query(
        "INSERT INTO t_cadastro_nutricionistas(nome, telefone, nasc_dt, email, endereco) values ($1, $2, $3, $4, $5)",
        [nome, telefone, nasc_dt, email, endereco]
    );

    res.status(201).send({
        message: "Nutricionista cadastrado com sucesso!",
        body: {
            nutricionista: { nome, telefone, nasc_dt, email, endereco }
        }
    });
};

// ==> Método responsável por listar todos os 'Nutricionistas':
exports.listAllNutricionistas = async (req, res) => {
    const response = await db.query('SELECT * from t_cadastro_nutricionistas ORDER BY nome ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Nutricionista' pelo 'ID':
exports.findNutricionistasById = async (req, res) => {
    const nutriId = parseInt(req.params.id);
    const response = await db.query('SELECT * from t_cadastro_nutricionistas where nutriid = $1', [nutriId]);
    res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar o cadastro de um 'Nutricionista' pelo 'ID':
exports.updateNutricionistasById = async (req, res) => {
    const nutriId = parseInt(req.params.id);
    const { nome, telefone, nasc_dt, email, endereco } = req.body;

    const response = await db.query("UPDATE t_cadastro_nutricionistas SET nome = $1, telefone = $2, nasc_dt = $3, email = $4, endereco = $5 WHERE nutriId = $6",
    [nome, telefone, nasc_dt, email, endereco, nutriId]
    );

    res.status(200).send({ message: "Cadastro atualizado"})
};

// ==> Método responsável por excluir um 'Nutricionista' pelo 'ID':
exports.deleteNutricionistaById = async (req, res) => {
    const nutriId = parseInt(req.params.id);
    await db.query('DELETE FROM t_cadastro_nutricionistas WHERE nutriId = $1', [nutriId]);
    
    res.status(200).send({ message: 'Nutricionista deletado com sucesso', nutriId });
};