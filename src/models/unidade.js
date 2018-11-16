const Model = require('./model');

const UnidadeSchema = {
    sql_: {
        table_name: 'unidades',
        primary: 'id'
    },
    id: 'primary',
    nutriente: 'string',
    unidade: 'string'
};

class Unidade extends Model {
    constructor(obj) {
        super(UnidadeSchema, obj);
    }
}

module.exports = Unidade;