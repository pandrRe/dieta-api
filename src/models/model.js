class Model {
    constructor(schema, obj) {
        this.data = {};
        this.sql_ = {};

        for (let key in schema) {
            if (key === 'sql_') {
                this.sql_ = obj[key];
                continue;
            }

            this.data[key] = obj[key];
        }
    }
}

module.exports = Model;