import { User } from '../models/User.js';
import { ForumPost } from '../models/ForumPost.js';
import { AuthenticationError } from 'apollo-server-express';

const resolvers = {
  Query: {
    getUser: async (parent, { id }, { models }) => {
      return models.User.findById(id);
    },
    getAllUsers: async (parent, args, { models }) => {
      return models.User.find();
    },
    getHabit: async (parent, { id }, { models }) => {
      return models.Habit.findById(id);
    },
    getAllHabits: async (parent, args, { models }) => {
      return models.Habit.find();
    },
    getForumPosts: async (parent, args, { models }) => {
      return models.ForumPost.find().populate('author');
    },
  },
  Mutation: {
    addUser: async (parent, { username, password }, { models }) => {
      const user = new models.User({ username, password });
      return user.save();
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
    addHabit: async (parent, { name, description, frequency, userId }, { models }) => {
      const habit = new models.Habit({ name, description, frequency, userId });
      return habit.save();
    },
    updateHabit: async (parent, { id, name, description, frequency }, { models }) => {
      return models.Habit.findByIdAndUpdate(id, { name, description, frequency }, { new: true });
    },
    deleteHabit: async (parent, { id }, { models }) => {
      return models.Habit.findByIdAndDelete(id);
    },
    addForumPost: async (parent, { title, content, authorId }, { models }) => {
      const forumPost = new models.ForumPost({ title, content, author: authorId });
      return forumPost.save().then(post => post.populate('author').execPopulate());
    },
  },
};

export default resolvers;

