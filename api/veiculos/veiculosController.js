
const responses = require('../../common/responses/successResponses')


const veiculosRepository = require('./repository/veiculosRepository')

const fetchAll =  async (req, res) =>{    
  
    try { 
     const values = await veiculosRepository.fetchAll()
  
     return await res.send(values)  
    } catch (error) {
        throw new Error(error)
    }
  } 

const getVeiculoById = async (req, res) =>{  
    const {id}= req.params  
 
    try {
    const response = await veiculosRepository.getVeiculoById(id);
    return await res.send(response)  
    } catch (error) {
        throw new Error(error)
    }
  } 

const createVeiculo = async (req, res) =>{    
    const {placa,chassi,renavam,modelo,marca,ano} = req.body
    try {
   await veiculosRepository.createVeiculo({placa,chassi,renavam,modelo,marca,ano})
    return responses.successResponse(res, {
    status: 200,
    message:'Veiculo criado com sucesso'
  })
    } catch (error) {
        throw new Error(error)
    }
  } 

  const updateVeiculo = async (req, res) =>{    
    const {id} = req.params
    const {placa,chassi,renavam,modelo,marca,ano} = req.body
    try {
   await veiculosRepository.updateVeiculo({placa,chassi,renavam,modelo,marca,ano,id})
        return responses.successResponse(res, {
            status: 200,
            message:'Veiculo alterado com sucesso'
          })
    } catch (error) {
        throw new Error(error)
    }
  } 

 const deleteVeiculo = async (req, res) =>{    
    const {id} = req.params
    try {
    await veiculosRepository.deleteVeiculo(id)
    return responses.successResponse(res, {
    status: 200,
    message:'Veiculo deletado com sucesso!'
  })
    } catch (error) {
        throw new Error(error)
    }
  } 

module.exports = {fetchAll,getVeiculoById,createVeiculo,deleteVeiculo,updateVeiculo}