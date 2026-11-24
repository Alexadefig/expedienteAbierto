const { Router } = require('express');
const casoRoutes = require('./caso.routes');
const usuarioRoutes = require('./usuario.routes');

const router = Router();

router.get('/health', (req, res) => res.json({ ok: true, mensaje: 'API funcionando' }));
router.use('/casos', casoRoutes);
router.use('/usuarios', usuarioRoutes);

module.exports = router;
