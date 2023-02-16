/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const UserSchema = new Schema({  
  email: String,
  password: String,
  name: String,
  age: Number,
  address: String

}, {timestamps: true});


