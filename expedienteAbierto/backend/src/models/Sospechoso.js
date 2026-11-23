const mongoose = require('mongoose');

const { Schema } = mongoose;

const sospechosoSchema = new Schema(
  {
    casoId: { type: Schema.Types.ObjectId, ref: 'Caso', required: true, index: true },
    nombre: { type: String, required: true, trim: true },
    edad: Number,
    ocupacion: String,
    biografia: String,
    declaracion: String,
    coartada: String,
    relaciones: [Schema.Types.Mixed],
    imagen: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Sospechoso', sospechosoSchema, 'sospechosos');
