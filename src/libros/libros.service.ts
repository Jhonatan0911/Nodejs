import { Injectable } from '@nestjs/common';
import { Libro } from './interfaces/libro';

@Injectable()
export class LibrosService {
  libros: Libro[] = [
    {
      id: 1,
      name: 'Heist',
      autor: 'Ariana Godoy',
      done: true,
    },
    {
      id: 2,
      name: 'STRANGE',
      autor: 'Alex Digomas',
      done: true,
    },
    {
      id: 3,
      name: 'Culpa mía',
      autor: 'Mercedes Ronn',
      done: false,
    },
  ];

  getLibros(): Libro[] {
    return this.libros;
  }
  getLibro(id: number): Libro {
    // eslint-disable-next-line prettier/prettier
    return this.libros.find(libro => libro.id === id);
  }
}
