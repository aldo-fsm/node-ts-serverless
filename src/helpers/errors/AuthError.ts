export default class AuthError extends Error {
  status = 401;
  constructor(message?: string) {
    super(message);
    this.message = message || 'Falha na autenticação';
    this.name = 'AuthException';
  }
};
