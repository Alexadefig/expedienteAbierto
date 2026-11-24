class AppError extends Error {
  constructor(mensaje, status = 500) {
    super(mensaje);
    this.status = status;
  }
}

module.exports = AppError;
