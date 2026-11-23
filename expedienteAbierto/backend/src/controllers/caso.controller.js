const mongoose = require('mongoose');
const Caso = require('../models/Caso');
const Sospechoso = require('../models/Sospechoso');
const Objetivo = require('../models/Objetivo');
const AppError = require('../utils/AppError');

const buscarCaso = async (id) => {
  const caso = await Caso.findById(id);
  if (!caso) throw new AppError('Caso no encontrado', 404);
  return caso;
};

const getCasos = async (req, res) => {
  const { dificultad, estado } = req.query;
  const filtro = {};
  if (dificultad) filtro.dificultad = dificultad;
  if (estado) filtro.estado = estado;

  const casos = await Caso.find(filtro).sort({ codigo: 1 });
  res.json({ ok: true, total: casos.length, data: casos });
};

const getCasoById = async (req, res) => {
  const caso = await buscarCaso(req.params.id);
  res.json({ ok: true, data: caso });
};

const createCaso = async (req, res) => {
  const caso = await Caso.create(req.body);
  const { solucion, ...data } = caso.toObject();
  res.status(201).json({ ok: true, mensaje: 'Caso creado', data });
};

const updateCaso = async (req, res) => {
  const caso = await Caso.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!caso) throw new AppError('Caso no encontrado', 404);
  res.json({ ok: true, mensaje: 'Caso actualizado', data: caso });
};

const deleteCaso = async (req, res) => {
  const caso = await Caso.findByIdAndDelete(req.params.id);
  if (!caso) throw new AppError('Caso no encontrado', 404);

  // Borra también los datos que dependen del caso
  const filtro = { casoId: caso._id };
  const db = mongoose.connection;
  await Promise.all([
    Sospechoso.deleteMany(filtro),
    Objetivo.deleteMany(filtro),
    db.collection('evidencias').deleteMany(filtro),
    db.collection('progresos').deleteMany(filtro),
    db.collection('notas').deleteMany(filtro),
    db.collection('acusaciones').deleteMany(filtro),
  ]);

  res.json({ ok: true, mensaje: 'Caso eliminado' });
};

const getSospechosos = async (req, res) => {
  await buscarCaso(req.params.id);
  const sospechosos = await Sospechoso.find({ casoId: req.params.id });
  res.json({ ok: true, total: sospechosos.length, data: sospechosos });
};

const getObjetivos = async (req, res) => {
  await buscarCaso(req.params.id);
  const objetivos = await Objetivo.find({ casoId: req.params.id }).sort({ orden: 1 });
  res.json({ ok: true, total: objetivos.length, data: objetivos });
};

module.exports = {
  getCasos,
  getCasoById,
  createCaso,
  updateCaso,
  deleteCaso,
  getSospechosos,
  getObjetivos,
};
