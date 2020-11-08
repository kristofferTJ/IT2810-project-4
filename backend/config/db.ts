const mongoose = require('mongoose');
const config = require('config');
const db = config.get('DB_CONNECTION');

export const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};
