import * as express from 'express';
import {join} from 'path';

const app: express.Application = express();

app.use('/', express.static(join(__dirname, '../app/')));

app.listen(3000);