const veiculosRoutes = require('../api/veiculos/veiculosRoutes')

exports.routes = (app) => {
    app.use('/api/veiculos', veiculosRoutes);
  /* Caso o app necessite de mais rotas. */
  };