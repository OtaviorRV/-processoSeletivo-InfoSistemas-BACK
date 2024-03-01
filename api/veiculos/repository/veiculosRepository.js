
const {
  dbConnection,
} = require('../../../shared/dbConnection');

const querys = require('./veiculosQuerys')


const fetchAll =  async () =>{   
  try { 
    const  [rows] = await dbConnection.promise().execute(querys.fetchAllQuery);
  console.log(rows)
    return rows;
  } catch (error) {
    throw new Error(error)
  }
 
};
  

const getVeiculoById = async (id) =>{  
  
  try {
    const [rows] = await dbConnection.promise().execute(querys.getVeiculoById, [id]);
    return rows[0];
  } catch (error) {
    throw new Error(error)
  }
  } 

const createVeiculo = async ({placa,chassi,renavam,modelo,marca,ano}) =>{

  try {
    await dbConnection.promise().execute(querys.createVeiculo,[placa,chassi,renavam,modelo,marca,ano]);
  return true
  } catch (error) {
    throw new Error(error)
  }
  } 

  const updateVeiculo =  async ({placa,chassi,renavam,modelo,marca,ano,id}) =>{
    const values = [];
    if (placa) {
      querys.updateVeiculo += 'placa = ?, ';
      values.push(placa);
    }
    if (chassi) {
      querys.updateVeiculo += 'chassi = ?, ';
      values.push(chassi);
    }
    if (renavam) {
      querys.updateVeiculo += 'renavam = ?, ';
      values.push(renavam);
    }
    if (modelo) {
      querys.updateVeiculo += 'modelo = ?, ';
      values.push(modelo);
    }
    if (marca) {
      querys.updateVeiculo += 'marca = ?, ';
      values.push(marca);
    }
    if (ano) {
      querys.updateVeiculo += 'ano = ?, ';
      values.push(ano);
    }
    if (values.length === 0) {
      throw new Error('Nenhum campo para atualizar foi fornecido.');
    }
    querys.updateVeiculo = querys.updateVeiculo.slice(0, -2);
    querys.updateVeiculo += ' WHERE id = ?';
    console.log(querys.updateVeiculo)
    values.push(id);
    try {
      await dbConnection.promise().execute(querys.updateVeiculo,[...values]);
    return true
    } catch (error) {
      throw new Error(error)
    }
    
  } 

 const deleteVeiculo = async (id) =>{    

  try {
    await dbConnection.promise().execute(querys.deleteVeiculo, [id]);
    return true;
  } catch (error) {
    throw new Error(error)
  }
  } 

  module.exports = {fetchAll,getVeiculoById,createVeiculo,deleteVeiculo,updateVeiculo}