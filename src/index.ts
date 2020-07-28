import 'reflect-metadata';
import './config/local-env';
import app from './server';
import { logger } from './config/logging';
import handler from 'serverless-express/handler';

export const server = handler(app);

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    logger.info(`Listening on ${port}`);
  });
}
