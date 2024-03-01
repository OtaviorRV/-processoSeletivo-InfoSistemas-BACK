const fetchAllQuery = `SELECT id,placa,chassi,renavam,modelo,marca,ano FROM veiculos;`

const getVeiculoById = `SELECT id,placa,chassi,renavam,modelo,marca,ano FROM veiculos
where id = ?;`


const createVeiculo = `INSERT INTO veiculos
(
placa,
chassi,
renavam,
modelo,
marca,
ano)
VALUES
(?, ?, ?, ?, ?, ?);`

const updateVeiculo = `
UPDATE veiculos
SET `

const deleteVeiculo= `
DELETE FROM veiculos
WHERE id = ?
`;


module.exports={
    fetchAllQuery,
    getVeiculoById,
    createVeiculo,
    updateVeiculo,
    deleteVeiculo
}