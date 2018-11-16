const Model = require('./model');

const AlimentoSchema = {
    sql_: {
        table_name: 'alimentos',
        primary: 'id'
    },
    id: 'primary',
    nome: 'string',
    preço: 'float',
    porção: 'string',
    valor_energetico: 'float',
    carboidratos: 'float',
    proteinas: 'float',
    gorduras_totais: 'float',
    gorduras_saturadas: 'float',
    gorduras_trans: 'float',
    fibra_alimentar: 'float',
    sodio: 'float',
};

class Alimento extends Model {
    constructor(obj) {
        super(AlimentoSchema, obj);
    }
}

module.exports = Alimento;