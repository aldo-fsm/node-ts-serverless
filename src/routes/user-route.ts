import errorHandler from "../helpers/error-handler";
import { create, find } from "../controllers/user-controller";

export default (express) => {
  const router = express.Router();

  router.get('/', errorHandler(find));
  router.post('/', errorHandler(create));

  return router;
};
