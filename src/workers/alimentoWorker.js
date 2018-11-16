const AlimentoHelper = {
    getAlimentoById: async (id, alimentoAgent) => {
        try {
            return await alimentoAgent.getAlimentoById(id);
        }
        catch(e) {
            throw e;
        }
    },

    getAllAlimentos: async (alimentoAgent) => {
        try {
            return await alimentoAgent.getAllAlimentos();
        }
        catch(e) {
            throw e;
        }
    }
};

const AlimentoWorker = {
    getAlimento: async (id, pool) => {
        const AlimentoAgent = require('../agents/alimentoAgent');
        const alimentoAgent = new AlimentoAgent(pool);

        if (id == 0) {
            try {
                return await AlimentoHelper.getAllAlimentos(alimentoAgent);
            }
            catch(e) {
                throw e;
            }
        }

        try {
            return await AlimentoHelper.getAlimentoById(id, alimentoAgent);
        }
        catch(e) {
            throw e;
        }
    }
};

module.exports = AlimentoWorker;