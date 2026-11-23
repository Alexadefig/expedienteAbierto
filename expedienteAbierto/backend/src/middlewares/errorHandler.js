const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let mensaje = err.message || 'Error interno del servidor';
  let detalles;

  if (err.type === 'entity.parse.failed') {
    status = 400;
    mensaje = 'JSON no válido';
  } else if (err.name === 'ValidationError') {
    status = 400;
    mensaje = 'Datos no válidos';
    detalles = Object.values(err.errors).map((e) => e.message);
  } else if (err.name === 'CastError') {
    status = 400;
    mensaje = `Valor no válido en ${err.path}`;
  } else if (err.code === 11000) {
    status = 409;
    mensaje = `Ya existe un registro con ese ${Object.keys(err.keyValue)[0]}`;
  }

  if (status === 500) console.error(err);

  res.status(status).json({ ok: false, mensaje, ...(detalles && { detalles }) });
};

module.exports = errorHandler;
