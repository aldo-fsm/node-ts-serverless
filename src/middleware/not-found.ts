import { ResourceNotFound } from '../helpers/errors';
import { NextFunction } from 'express';

export default (req, res, next: NextFunction) => next(new ResourceNotFound());
