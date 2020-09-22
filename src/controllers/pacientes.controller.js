const db = require('../config/database');

// ==> Método responsável por criar um novo paciente

exports.createPaciente = async (req, res) => {
    const { nome, telefone, nasc_dt, email, endereco } = req.body;
    const { rows } = await db.query(
        "INSERT INTO t_cadastro_pacientes(nome, telefone, nasc_dt, email, endereco) values($1, $2, $3, $4, $5)",
        [nome, telefone, nasc_dt, email, endereco]
    );

    res.status(201).send({
        message: "Cadastrado com sucesso",
        body: {
            paciente: { nome, telefone, nasc_dt, email, endereco }
        },
    });
};

// ==> Método responsável por listar todos os 'pacientes':
exports.listAllpacientes = async (req, res) => {
    const response = await db.query('SELECT * from t_cadastro_pacientes ORDER BY nome ASC');
    res.status(200).send(response.rows);
};


// ==> Método responsável por selecionar 'paciente' pelo 'ID':
exports.findpacienteById = async (req, res) => {
    const nutriId = parseInt(req.params.id);
    const response = await db.query('SELECT * from t_cadastro_pacientes where nutriid = $1', [nutriId]);
    res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar o cadastro de um 'paciente' pelo 'ID':
exports.updatepacienteById = async (req, res) => {
    const nutriId = parseInt(req.params.id);
    const { nome, telefone, nasc_dt, email, endereco } = req.body;

    const response = await db.query("UPDATE t_cadastro_pacientes SET nome = $1, telefone = $2, nasc_dt = $3, email = $4, endereco = $5 WHERE nutriId = $6",
    [nome, telefone, nasc_dt, email, endereco, nutriId]
    );

    res.status(200).send({ message: "Cadastro atualizado"})
};

// ==> Método responsável por excluir um 'paciente' pelo 'ID':
exports.deletepacienteById = async (req, res) => {
    const nutriId = parseInt(req.params.id);
    await db.query('DELETE FROM t_cadastro_pacientes WHERE nutriId = $1', [nutriId]);
    
    res.status(200).send({ message: 'paciente deletado com sucesso', nutriId });
};