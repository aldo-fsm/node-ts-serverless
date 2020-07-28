import { readFileSync } from "fs";
import path from 'path';
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "../entity/User";
import AuthError from "../helpers/errors/AuthError";

export const PRIVATE_KEY = readFileSync(path.resolve(__dirname, '../../keys/jwtRS256.key'));
export const PUBLIC_KEY = readFileSync(path.resolve(__dirname, '../../keys/jwtRS256.key.pub'));

passport.use(new Strategy({
  secretOrKey : PUBLIC_KEY,
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
  try {
    const userId = token.sub;
    const [user] = await User.findByIds([userId]);
    if (!user) throw new AuthError();
    return done(null, user);
  } catch (error) {
    done(error);
  }
}));
