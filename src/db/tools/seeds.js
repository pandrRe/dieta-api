const seeds = [
    {
        table: 'alimentos',
        columnsToBeSeeded: ['nome', 'preço', 'porção', 'valor_energetico', 'carboidratos', 'proteinas',
            'gorduras_totais', 'gorduras_saturadas', 'gorduras_trans', 'fibra_alimentar', 'sodio'],
        data: [
            ['Laranja', 0.2, '100g - 1 unidade', 47, 11.75, 0.94, 0.12, 0, 0, 0.43, 0],
            ['Achocolatado', 0.3, '20g - 2 colheres', 74, 17, 0.7, 0.5, 0, 0, 1.1, 12],
            ['Leite Integral', 0.6, '200ml - 1 copo', 113, 8.8, 6, 6, 4, 0, 0, 138],
            ['Mini Coxinha', 0.5, '25g - 1 unidade', 65, 7.6, 3.1, 2.4, 1, 0, 0.59, 212],
            ['Hambúrguer', 0.8, '80g - 1 unidade', 0, 2.4, 12, 14, 5.3, 1.5, 0, 820],
            ['Macarrão Instantâneo', 1.4, '80g - 1 unidade', 261, 53, 10, 1, 0.4, 0, 2.2, 1246],
            ['Amendoins', 0.4, '15g - Punhado', 68, 2.5, 4.1, 7.7, 1.2, 0, 1, 0],
            ['Maçã', 0.38, '100g - 1 unidade', 59, 15.25, 0.19, 0.36, 0, 0, 2.7, 0],
            ['Torta de Limão', 1, '66g - 1 unidade', 149, 15, 2, 9, 6, 1, 0, 30],
            ['Sorvete de Flocos', 2, '60g - 1 bola', 128, 16, 1.2, 6.5, 3.6, 0, 0, 23]
        ]
    },
    {
        table: 'unidades',
        columnsToBeSeeded: ['nutriente', 'unidade'],
        data: [
            ['valor_energetico', 'kcal'],
            ['carboidratos', 'g'],
            ['proteinas', 'g'],
            ['gorduras_totais', 'g'],
            ['gorduras_saturadas', 'g'],
            ['gorduras_trans', 'g'],
            ['fibra_alimentar', 'g'],
            ['sodio', 'mg']
        ]
    }
];

module.exports = seeds;