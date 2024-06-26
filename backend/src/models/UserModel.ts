import mongoose, { Document } from "mongoose";

export interface User extends Document {
    username: string;
    password: string;
    email: string;
}
  
export const UserModel = mongoose.model<User>("User", new mongoose.Schema<User>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
}));