import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export { User, IUser };