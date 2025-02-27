const dotenv = require('dotenv');
const { Client } = require('pg'); // or any other database client

module.exports = (on, config) => {
  dotenv.config();
  config.env.DATABASE_URL = process.env.DATABASE_URL;

  on('task', {
    connectToDatabase() {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
      });

      return client.connect()
        .then(() => 'Connected')
        .catch((err) => err.message);
    },
    createUser(user) {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
      });

      return client.connect()
        .then(() => {
          const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
          const values = [user.username, user.password];
          return client.query(query, values);
        })
        .then(() => 'User Created')
        .catch((err) => err.message)
        .finally(() => client.end());
    },
  });

  return config;
};