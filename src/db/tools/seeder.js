function mountInsertQuery(seed) {
    let sql = `INSERT INTO ${seed.table} (${seed.columnsToBeSeeded}) VALUES\n\t`;
    seed.data.forEach( (data, index) => {
        data = data.map( el => {
            return `'${el}'`;
        });

        sql += `(${data})`;

        if (index !== seed.data.length - 1)
            sql += ',\n\t';
    });

    return sql;
}

function insertIntoTable(pool, seed) {
    pool.getConnection( (err, connection) => {
        if (err) throw err;

        const sql = mountInsertQuery(seed);
        console.log(`Populando tabela ${seed.table}`);
        connection.query(sql, (error, results) => {
            console.log(`Linhas afetadas: ${results.affectedRows}`);

            connection.release();

            if (error) throw error;
        });
    });
}

function seed(pool, seeds) {
    for (let seed of seeds) {
        insertIntoTable(pool, seed);
    }
}

const seeds = require('./seeds.js');
const pool = require('../database.js');

seed(pool, seeds);