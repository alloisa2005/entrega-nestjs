/* eslint-disable prettier/prettier */

import { Schema } from 'mongoose';

export const ProductSchema = new Schema({  
  name: String,
  description: String,
  price: Number,
  stock: Number,

}, {timestamps: true});