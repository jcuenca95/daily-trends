import 'reflect-metadata';
import express from 'express';
import { container } from 'tsyringe';

import { FeedsController } from './feeds/feeds.controller';
import { mongoConnect } from './database';

const feedController = container.resolve(FeedsController)

const PORT = 3000;

const app = express();

app.use('/feeds', feedController.routes())


mongoConnect().then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
})
