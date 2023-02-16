import { Document } from 'mongoose';

export class User extends Document {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
  address: string;
}
