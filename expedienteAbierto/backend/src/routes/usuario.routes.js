const { Router } = require('express');
const validateObjectId = require('../middlewares/validateObjectId');
const {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuario.controller');

const router = Router();

router.get('/', getUsuarios);
router.post('/', createUsuario);
router.get('/:id', validateObjectId, getUsuarioById);
router.put('/:id', validateObjectId, updateUsuario);
router.delete('/:id', validateObjectId, deleteUsuario);

module.exports = router;
