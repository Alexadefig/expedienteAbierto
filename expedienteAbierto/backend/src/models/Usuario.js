const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: [true, 'El nombre es obligatorio'], trim: true },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Email no válido'],
    },
    passwordHash: { type: String, required: true, select: false },
    fechaRegistro: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
    rol: { type: String, enum: ['jugador', 'admin'], default: 'jugador' },
    preferencias: {
      sonido: { type: Boolean, default: true },
      animaciones: { type: Boolean, default: true },
    },
  },
  {
    versionKey: false,
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.passwordHash;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model('Usuario', usuarioSchema, 'usuarios');
