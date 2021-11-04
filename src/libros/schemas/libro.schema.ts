/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
export const LibroSchema = new Schema({
  name: String,
  autor: String,
  done: Boolean
});
