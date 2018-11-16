const sqlAttrDict = {
    'string': 'varchar(255) NOT NULL',
    'int': 'int NOT NULL',
    'primary': 'int NOT NULL AUTO_INCREMENT',
    'float': 'float(10, 2) NOT NULL'
};

function mountTableSQL(table) {
    let sql = '';

    sql += `CREATE TABLE IF NOT EXISTS ${table.sql_.table_name} (\n\t`;

    for (let column in table) {
        if (column == 'sql_')
            continue;
        
        let columnType = table[column];
        sql += `${column} ${sqlAttrDict[columnType]},\n\t`;
    }

    if (table.sql_.hasOwnProperty('primary')) {
        sql += `PRIMARY KEY (${table.sql_.primary})\n`;
    }

    sql += ');';

    return sql;
}

function createTables(tables, pool) {
    pool.getConnection( (err, connection) => {
        if (err) throw err;
        for (let tableName in tables) {
            let sql = mountTableSQL(tables[tableName]);

            connection.query(sql, (error) => {
                console.log(`Criando tabela ${tableName}`);
                if (error) throw error;
            });
        }

        connection.release();
        pool.end();
    });
}

function schematize(schema, pool) {
    const tables = schema.tables;
    createTables(tables, pool);
}

const schema = require('./schema.js');
const pool = require('../database.js');
schematize(schema, pool);