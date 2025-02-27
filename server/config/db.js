import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...'); // Debugging: Log connection attempt
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to MongoDB'); // Debugging: Log successful connection
  } catch (err) {
    console.error('MongoDB connection error:', err); // Debugging: Log detailed error
    process.exit(1); // Exit process with failure
  }
};

connectDB();

export default mongoose.connection;