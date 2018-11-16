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

        finalData.constraints = {
            valor_energetico: {min: data.valor_energetico.min, max: data.valor_energetico.max},
            carboidratos: {min: data.carboidratos.min, max: data.carboidratos.max},
            proteinas: {min: data.proteinas.min, max: data.proteinas.max},
            gorduras_totais: {min: data.gorduras_totais.min, max: data.gorduras_totais.max},
            gorduras_saturadas: {min: data.gorduras_saturadas.min, max: data.gorduras_saturadas.max},
            gorduras_trans: {min: data.gorduras_trans.min, max: data.gorduras_trans.max},
            fibra_alimentar: {min: data.fibra_alimentar.min, max: data.fibra_alimentar.max},
            sodio: {min: data.sodio.min, max: data.sodio.max}
        };

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