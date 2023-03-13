import mongoose, { ConnectOptions } from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const options: ConnectOptions = {
};

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;