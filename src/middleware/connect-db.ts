import { connect } from '../config/db-connection';
import { Request, NextFunction, Response } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  await connect();
  next();
};
