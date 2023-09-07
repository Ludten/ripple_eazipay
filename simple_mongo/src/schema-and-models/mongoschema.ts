import mongoose, { Schema } from 'mongoose';
import { Book, User } from './model';

const userSchema = new Schema<User>({
  username: String,
  password: String,
});

const bookSchema = new Schema<Book>({
  Title: String,
  Author: String,
});

const UserModel = mongoose.model<User>('User', userSchema);
const BookModel = mongoose.model<Book>('Book', bookSchema);

export {UserModel, BookModel};
