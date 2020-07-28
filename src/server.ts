import express, { json } from 'express';
import cors from 'cors'
import routes from './routes';

import errorMidleware from './middleware/error';
import notFound from './middleware/not-found';
import connectDb from './middleware/connect-db';
import passport from 'passport';

const app = express();

app.use(cors());
app.use(json({ limit: '5mb' }));
app.use(connectDb);
app.use(passport.initialize());
app.use('/', routes);
app.use(notFound);
app.use(errorMidleware);

export default app;
