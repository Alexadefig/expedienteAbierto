const mongoose = require('mongoose');

const { Schema } = mongoose;

const objetivoSchema = new Schema(
  {
    casoId: { type: Schema.Types.ObjectId, ref: 'Caso', required: true },
    titulo: { type: String, required: true, trim: true },
    descripcion: String,
    orden: { type: Number, required: true },
    tipo: { type: String, enum: ['exploracion', 'analisis', 'deduccion', 'acusacion'], required: true },
    obligatorio: { type: Boolean, default: true },
  },
  { versionKey: false }
);

objetivoSchema.index({ casoId: 1, orden: 1 });

module.exports = mongoose.model('Objetivo', objetivoSchema, 'objetivos');
