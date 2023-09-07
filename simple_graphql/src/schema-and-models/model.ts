import { Document } from 'mongoose';

interface User extends Document {
  username: string;
  password: string;
}

interface Book extends Document {
  Title: string;
  Author: string;
}

export { User, Book };
