const { isValidObjectId } = require('mongoose');

const validateObjectId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({ ok: false, mensaje: 'Id no válido' });
  }
  next();
};

module.exports = validateObjectId;
