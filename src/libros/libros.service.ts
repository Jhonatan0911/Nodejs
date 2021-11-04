import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Libro } from './interfaces/libro';
import { Model } from 'mongoose';
import { CreateLibroDto } from './dto/create-libro.dto';

@Injectable()
export class LibrosService {
  constructor(@InjectModel('Libro') private libroModel: Model<Libro>) {}

  async getLibros() {
    return await this.libroModel.find();
  }

  async getLibro(_id: string) {
    return await this.libroModel.findById(_id);
  }

  async createLibro(libro: CreateLibroDto) {
    const newLibro = new this.libroModel(libro);
    return await newLibro.save();
  }
}
