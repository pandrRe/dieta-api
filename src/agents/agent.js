const dbConnect = require('../db/wrapper/dbPromiseWrapper.js').dbConnect;

class Agent {
    constructor(pool) {
        this.pool = pool;
    }

    connect() {
        return dbConnect(this.pool);
    }

    fit(res) {
        if (res.length === 1)
            return res[0];
        
        return res;
    }

    fitModel(res, model) {
        if (res.length === 1)
            return new model(res[0]);

        const objs = res.map( data => new model(data) );

        return objs;
    }

    fetch(query) {
        return this.connect()
            .then( conn => {
                return conn.pQuery(query)
                    .then( res => {
                        conn.release();
                        return this.fit(res);
                    })
                    .catch(e => {
                        throw e;
                    });
            })
            .catch(e => {
                throw e;
            });
    }

    fetchToModel(query, model) {
        return this.connect()
            .then( conn => {
                return conn.pQuery(query)
                    .then( res => {
                        conn.release();
                        return this.fitModel(res, model);
                    })
                    .catch(e => {
                        throw e;
                    });
            })
            .catch(e => {
                throw e;
            });
    }
}

module.exports = Agent;