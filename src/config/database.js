const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//=> conexão com base de dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};