const express = require('express');
const pool = require('./db/database');

const app = express();
const port = 3000;

const workers = {
    lp: require('./workers/lpWorker'),
    alimento: require('./workers/alimentoWorker')
};

app.use(express.json());

app.post('/dieta', async (req, res) => {
    try {
        const dieta = await workers.lp.solve(req.body, pool);
        res.send(dieta);
    }
    catch(e) {
        console.log(e);
    }
});

app.post('/alimento/:id', async (req, res) => {
    try {
        const alimento = await workers.alimento.getAlimento(req.params.id, pool);
        res.send(alimento);
    }
    catch(e) {
        console.log(e);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));