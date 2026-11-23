const mongoose = require('mongoose');

let conexion = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;
  if (!process.env.MONGODB_URI) throw new Error('Falta MONGODB_URI en el .env');

  if (!conexion) {
    conexion = mongoose
      .connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME || 'expediente_abierto' })
      .then(() => console.log('MongoDB conectado'))
      .catch((err) => {
        conexion = null;
        throw err;
      });
  }

  await conexion;
};

module.exports = connectDB;
