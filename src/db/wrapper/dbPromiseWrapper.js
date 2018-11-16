function dbQuery(conn, options) {
    return new Promise( (resolve, reject) => {
        conn.query(options, (error, results, fields) => {
            if (error) reject(error);

            resolve(results, fields);
        });
    });
}

function dbConnect(pool) {
    return new Promise( (resolve, reject) => {
        pool.getConnection( (err, conn) => {
            if (err) reject(err);

            conn.pQuery = options => dbQuery(conn, options);
            resolve(conn);
        });
    });
}

module.exports = {
    dbConnect: dbConnect
};