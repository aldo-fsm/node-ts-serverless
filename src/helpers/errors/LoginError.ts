export default class LoginError extends Error {
  status = 400;
  constructor(message?: string) {
    super(message);
    this.message = message || 'E-mail ou senha inválidos';
    this.name = 'LoginException';
  }
};
