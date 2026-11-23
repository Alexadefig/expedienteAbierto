const connectDB = require('../config/db');

const dbConnect = async (req, res, next) => {
  await connectDB();
  next();
};

module.exports = dbConnect;
