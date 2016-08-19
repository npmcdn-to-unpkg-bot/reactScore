/// <reference path="../../typings/index.d.ts" />

import * as express from 'express';

const app: express.Application = express(),
        router = express.Router();

router.get('/', (req, res) => {
     res.send('test');
});

app.get('/', function () {

});
app.use('/', router);

app.listen(3000);