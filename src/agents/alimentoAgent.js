const Agent = require('./agent.js');
const Alimento = require('../models/alimento.js');

class AlimentoAgent extends Agent {
    getAllAlimentos() {
        const query = {
            sql: 'SELECT * FROM alimentos'
        };

        return this.fetchToModel(query, Alimento);
    }

    getAlimentoById(id) {
        const query = {
            sql: 'SELECT * FROM alimentos WHERE id = ?',
            values: [id]
        };

        return this.fetchToModel(query, Alimento);
    }
}

module.exports = AlimentoAgent;