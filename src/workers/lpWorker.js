const LinearProgrammingHelper = {
    setupData: async (data, pool) => {
        const AlimentoAgent = require('../agents/alimentoAgent');
        const alimentoAgent = new AlimentoAgent(pool);
        
        const finalData = {
            alimentos: {},
            ints: {},
            constraints: {}
        };

        let alimento;
        for (let alimentoId of data.alimentos) {
            try {
                alimento = await alimentoAgent.getAlimentoById(alimentoId);
            }
            catch(e) {
                throw e;
            }
            
            finalData.alimentos[alimento.data.nome] = alimento.data;
            finalData.alimentos[alimento.data.nome][alimento.data.nome] = 1;
            finalData.ints[alimento.data.nome] = 1;
        }

        finalData.constraints = data.nutrientes;

        return finalData;
    }
};

const LinearProgrammingWorker = {
    solve: async (data, pool) => {
        const solver = require('javascript-lp-solver');
        const adjustedData = await LinearProgrammingHelper.setupData(data, pool);

        const model = {
            optimize: 'preço',
            opType: 'min',
            constraints: adjustedData.constraints,
            variables: adjustedData.alimentos,
            ints: adjustedData.ints
        };

        const solution = solver.Solve(model);

        return JSON.stringify(solution);
    }
};

module.exports = LinearProgrammingWorker;