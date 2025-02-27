import { IResolvers } from '@graphql-tools/utils';
import { AuthController } from '../controllers/authController';
import { UserController } from '../controllers/userController';

const authController = new AuthController();
const userController = new UserController();

export const resolvers: IResolvers<any, any> = {
  Query: {
    getUser: async (_: any, { id }: { id: string }, context: any) => {
      return await userController.getUser(id, context);
    },
  },
  Mutation: {
    registerUser: async (_: any, { userInput }: { userInput: any }, context: any) => {
      return await authController.registerUser(userInput, context);
    },
    loginUser: async (_: any, { email, password }: { email: string; password: string }, context: any) => {
      return await authController.loginUser(email, password, context);
    },
    updateUser: async (_: any, { id, userInput }: { id: string; userInput: any }, context: any) => {
      return await userController.updateUser(id, userInput, context);
    },
  },
};