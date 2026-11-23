const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const AppError = require('../utils/AppError');

const hashPassword = (password) => {
  if (typeof password !== 'string' || password.length < 6) {
    throw new AppError('La contraseña debe tener al menos 6 caracteres', 400);
  }
  return bcrypt.hash(password, 10);
};

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json({ ok: true, total: usuarios.length, data: usuarios });
};

const getUsuarioById = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) throw new AppError('Usuario no encontrado', 404);
  res.json({ ok: true, data: usuario });
};

const createUsuario = async (req, res) => {
  const { nombre, email, password, preferencias } = req.body;
  const passwordHash = await hashPassword(password);
  const usuario = await Usuario.create({ nombre, email, passwordHash, preferencias });
  res.status(201).json({ ok: true, mensaje: 'Usuario creado', data: usuario });
};

const updateUsuario = async (req, res) => {
  const { password, passwordHash, ...datos } = req.body;
  if (password) datos.passwordHash = await hashPassword(password);

  const usuario = await Usuario.findByIdAndUpdate(req.params.id, datos, {
    new: true,
    runValidators: true,
  });
  if (!usuario) throw new AppError('Usuario no encontrado', 404);
  res.json({ ok: true, mensaje: 'Usuario actualizado', data: usuario });
};

const deleteUsuario = async (req, res) => {
  const usuario = await Usuario.findByIdAndDelete(req.params.id);
  if (!usuario) throw new AppError('Usuario no encontrado', 404);
  res.json({ ok: true, mensaje: 'Usuario eliminado' });
};

module.exports = { getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario };
