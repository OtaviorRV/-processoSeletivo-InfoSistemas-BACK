const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root', // Use a nova senha aqui
  database: 'veiculosdatabase',
  port: 3306,
};

const dbConnection = mysql.createConnection(dbConfig);


async function executeTrackedQuery(sqlQuery) {
  return new Promise((resolve, reject) => {
    dbConnection.query(sqlQuery, (err, result) => {    
      if (err) reject(err);
      resolve(result);
    });
  });
}

async function closeConnection() {
  dbConnection.end((err) => {
    if (err) throw err;
    console.log('Conexão com o banco de dados MySQL fechada!');
  });
}

module.exports = {
  dbConnection,
  closeConnection,
  executeTrackedQuery
};