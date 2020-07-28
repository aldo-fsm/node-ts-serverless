
const handleError = fn => async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default (...fns) => fns.map(fn => handleError(fn));
