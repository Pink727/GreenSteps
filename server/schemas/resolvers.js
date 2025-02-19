// filepath: /GreenSteps/GreenSteps/server/schemas/resolvers.js

const { User, Habit } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    getUser: async (parent, { username }) => {
      return User.findOne({ username });
    },
    getHabits: async (parent, { userId }) => {
      return Habit.find({ userId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      return user;
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const isMatch = await user.isCorrectPassword(password);
      if (!isMatch) {
        throw new AuthenticationError('Incorrect credentials');
      }
      return user;
    },
    addHabit: async (parent, { userId, habitData }) => {
      const habit = await Habit.create({ ...habitData, userId });
      return habit;
    },
    updateHabit: async (parent, { habitId, habitData }) => {
      return Habit.findByIdAndUpdate(habitId, habitData, { new: true });
    },
    deleteHabit: async (parent, { habitId }) => {
      return Habit.findByIdAndDelete(habitId);
    },
  },
};

module.exports = resolvers;