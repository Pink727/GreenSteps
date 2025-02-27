# typescript-backend-server/typescript-backend-server/README.md

# TypeScript Backend Server with GraphQL, JWT Authentication, and MongoDB

This project is a TypeScript backend server that utilizes GraphQL with a Node.js and Express.js server. It includes user authentication using JWT and utilizes MongoDB with the Mongoose ODM for user registration, login, and form handling.

## Features

- User registration and login with JWT authentication
- GraphQL API for handling user-related operations
- MongoDB for data storage
- Organized project structure with controllers, services, models, and resolvers

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- TypeScript (installed globally)

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the project directory:

   cd typescript-backend-server

3. Install the dependencies:

   npm install

### Configuration

1. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

### Running the Server

To start the server, run the following command:

npm run start

The server will start on `http://localhost:4000`.

### API Endpoints

- **Register User**: `POST /graphql` with mutation for user registration
- **Login User**: `POST /graphql` with mutation for user login
- **Get User**: `GET /graphql` with query to retrieve user information

### Project Structure

- `src/app.ts`: Initializes the Express application and connects to MongoDB.
- `src/server.ts`: Starts the server and listens for incoming requests.
- `src/controllers/`: Contains controller classes for handling requests.
- `src/models/`: Defines Mongoose models for data interaction.
- `src/resolvers/`: Maps GraphQL queries and mutations to controller methods.
- `src/schemas/`: Defines GraphQL schemas and types.
- `src/services/`: Contains business logic for authentication and user management.
- `src/types/`: Exports TypeScript interfaces for type safety.
- `src/utils/`: Utility functions for JWT handling.

### License

This project is licensed under the MIT License. See the LICENSE file for details.