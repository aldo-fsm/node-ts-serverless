class ResourceNotFound extends Error {
  name = 'ResourceNotFound';
  status = 404;
  constructor(message?: string) {
    super(message);
    this.message = message || 'Recurso não encontrado';
  }
};

export default ResourceNotFound
