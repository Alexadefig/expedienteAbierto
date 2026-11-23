const mongoose = require('mongoose');

const { Schema } = mongoose;

const solucionSchema = new Schema(
  {
    sospechosoCulpableId: { type: Schema.Types.ObjectId, ref: 'Sospechoso' },
    evidenciasNecesarias: [{ type: Schema.Types.ObjectId, ref: 'Evidencia' }],
    explicacion: String,
  },
  { _id: false }
);

const casoSchema = new Schema(
  {
    codigo: {
      type: String,
      required: [true, 'El código es obligatorio'],
      unique: true,
      trim: true,
      uppercase: true,
      match: [/^EXP-\d{4}$/, 'El código debe tener el formato EXP-0000'],
    },
    titulo: { type: String, required: [true, 'El título es obligatorio'], trim: true },
    descripcion: { type: String, required: [true, 'La descripción es obligatoria'], trim: true },
    victima: String,
    ubicacion: String,
    fechaDelCrimen: Date,
    dificultad: { type: String, enum: ['baja', 'media', 'alta'], default: 'media' },
    estado: { type: String, enum: ['disponible', 'borrador', 'archivado'], default: 'disponible' },
    imagenPortada: String,
    // Privada: no se devuelve nunca en las consultas
    solucion: { type: solucionSchema, select: false },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Caso', casoSchema, 'casos');
