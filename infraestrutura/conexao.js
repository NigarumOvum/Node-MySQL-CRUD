const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'rock1020',
    database: 'agenda_petshop'
})

module.exports = conexao