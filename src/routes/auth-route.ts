import { login } from "../controllers/auth-controller";
import errorHandler from "../helpers/error-handler";

export default (express) => {
  const router = express.Router();

  router.post('/login', errorHandler(login));

  return router;
};
