const express = require('express');
const router = express.Router();
const veiculosController = require('./veiculosController.js');

router.get('/', veiculosController.fetchAll );
router.get('/:id', veiculosController.getVeiculoById);
router.post('/', veiculosController.createVeiculo);
router.put('/:id', veiculosController.updateVeiculo);
router.delete('/:id', veiculosController.deleteVeiculo);

module.exports = router;