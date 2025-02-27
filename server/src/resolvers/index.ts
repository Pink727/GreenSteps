import { IResolvers } from '@graphql-tools/utils';
import { AuthController } from '../controllers/authController';
import { UserController } from '../controllers/userController';

const authController = new AuthController();
const userController = new UserController();

export const resolvers: IResolvers<any, any> = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await userController.getUser(id);
    },
  },
  Mutation: {
    registerUser: async (_: any, { userInput }: { userInput: any }) => {
      return await authController.registerUser(userInput);
    },
    loginUser: async (_: any, { email, password }: { email: string; password: string }) => {
      return await authController.loginUser(email, password);
    },
    updateUser: async (_: any, { id, userInput }: { id: string; userInput: any }) => {
      return await userController.updateUser(id, userInput);
    },
  },
};