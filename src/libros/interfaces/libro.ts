/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Libro extends Document {
  id?: number,
  name: string,
  autor: string,
  done: boolean
}
