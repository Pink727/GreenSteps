import pkg from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { MongoClient, ServerApiVersion } = pkg;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

connectDB();

export default client;