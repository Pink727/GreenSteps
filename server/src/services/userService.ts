import { User } from '../models/userModel';
import { IUser } from "../models/userModel";

export class UserService {
    async createUser(userData: IUser): Promise<IUser> {
        const user = new User(userData);
        await user.save();
        return user;
    }

    async getUserById(userId: string): Promise<IUser | null> {
        return await User.findById(userId).exec();
    }

    async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(userId, userData, { new: true }).exec();
    }

    async deleteUser(userId: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(userId).exec();
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find().exec();
    }
}