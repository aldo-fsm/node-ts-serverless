import { logger } from '../config/logging';
import { Response, Request } from 'express';
import { NextFunction } from 'connect';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  const { message, status, name }  = err;
  return res.status(status || 500).json({ message, name });
};
