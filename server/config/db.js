const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'your_mongodb_atlas_connection_string';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;