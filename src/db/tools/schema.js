const schema = {
    dbName: 'dieta',
    tables: {
        alimentos: {
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
            sodio: 'float'
        },
        unidades: {
            sql_: {
                table_name: 'unidades',
                primary: 'id'
            },
            id: 'primary',
            nutriente: 'string',
            unidade: 'string'
        }
    }
};

module.exports = schema;