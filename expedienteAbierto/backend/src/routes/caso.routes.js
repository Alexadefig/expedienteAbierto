const { Router } = require('express');
const validateObjectId = require('../middlewares/validateObjectId');
const {
  getCasos,
  getCasoById,
  createCaso,
  updateCaso,
  deleteCaso,
  getSospechosos,
  getObjetivos,
} = require('../controllers/caso.controller');

const router = Router();

router.get('/', getCasos);
router.post('/', createCaso);
router.get('/:id', validateObjectId, getCasoById);
router.put('/:id', validateObjectId, updateCaso);
router.delete('/:id', validateObjectId, deleteCaso);
router.get('/:id/sospechosos', validateObjectId, getSospechosos);
router.get('/:id/objetivos', validateObjectId, getObjetivos);

module.exports = router;
