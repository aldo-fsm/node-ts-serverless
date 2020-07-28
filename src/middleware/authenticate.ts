import passport from "passport";
import AuthError from "../helpers/errors/AuthError";
import { logger } from "../config/logging";
import { User } from "../entity/User";

export default (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user: User, info) => {
    if (err || !user) return next(new AuthError());
    req.user = user;
    logger.info('Authenticated', { userId: user.id})
    next();
  })(req, res, next);
}
