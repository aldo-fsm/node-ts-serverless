import { Response, Request } from "express";
import { logger } from "../config/logging";
import { User } from "../entity/User";
import { getRepository } from "typeorm";
import { PaginationInput } from "../models/pagination-input";
import { Paginator } from "../helpers/pagination";
import { parseQuery } from "../helpers/parsers/query-parser";

export const create = async (req: Request, res: Response) => {
  logger.info('Creating user');
  const body: User = req.body;
  const userRepo = getRepository(User);
  const newUser = userRepo.create(body);
  newUser.password = body.password;
  await newUser.save();
  res.status(201).json(newUser);
}

export const find = async (req: Request, res: Response) => {
  logger.info('Getting users');
  const { page, size } = parseQuery(req.query, { toNumber: ['page', 'size'] }) as PaginationInput;
  const userRepo = getRepository(User);
  const paginator = new Paginator<User>(userRepo);
  const users = await paginator.paginate(page, size);
  res.json(users);
}
