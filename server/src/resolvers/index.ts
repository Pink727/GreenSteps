import authController from '../controllers/authController';
import { UserController } from '../controllers/userController';
import { Request, Response } from 'express';

const userController = new UserController();

const createMockRequest = (params: any, body: any): Request => {
  return {
    params,
    body,
    // Add other properties and methods as needed
  } as Request;
};

const createMockResponse = (): Response => {
  const res = {} as Response;
  res.status = (code: number) => res;
  res.json = (data: any) => res;
  return res;
};

export const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }, context: any) => {
      const req = createMockRequest({ id }, null);
      const res = createMockResponse();
      return await userController.getUser(req, res);
    },
  },
  Mutation: {
    registerUser: async (_: any, { userInput }: { userInput: any }) => {
      const req = createMockRequest(null, userInput);
      const res = createMockResponse();
      return await authController.registerUser(req, res);
    },
    loginUser: async (_: any, { email, password }: { email: string; password: string }) => {
      const req = createMockRequest(null, { email, password });
      const res = createMockResponse();
      return await authController.loginUser(req, res);
    },
    updateUser: async (_: any, { id, userInput }: { id: string; userInput: any }) => {
      const req = createMockRequest({ id }, userInput);
      const res = createMockResponse();
      return await userController.updateUser(req, res);
    },
  },
};