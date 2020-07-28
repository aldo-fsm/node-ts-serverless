import { Response, Request } from "express";
import { logger } from "../config/logging";
import { User } from "../entity/User";
import LoginError from "../helpers/errors/LoginError";

export const login = async (req: Request, res: Response) => {
    const {
      email,
      password,
    } = req.body;

    logger.info('login');

    const user = await User.findOne({ email });
    if (!user) throw new LoginError();

    const token = user.login(password);

    res.json({
      token,
      type: 'Bearer'
    });
}
