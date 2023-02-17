import { Document } from 'mongoose';

export class Product extends Document {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}
