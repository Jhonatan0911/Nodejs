// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { LibrosService } from './libros.service';
import { Libro } from './interfaces/libro';

@Controller('libros')
export class LibrosController {
  constructor(private libroService: LibrosService) {}
  @Get()
  getlibros(): Promise<Libro[]> {
    return this.libroService.getLibros();
  }

  @Get(':libroId')
  getlibro(@Param('libroId') libroId: string) {
    return this.libroService.getLibro(libroId);
  }

  @Post()
  createLibro(@Body() libro: CreateLibroDto): Promise<Libro> {
    return this.libroService.createLibro(libro);
  }

  @Delete(':id')
  deleteLibro(@Param('id') id): string {
    console.log(id);
    return 'Deleting a libro ' + id;
  }

  @Put(':id')
  updateLibro(@Body() libro: CreateLibroDto, @Param('id') id): string {
    console.log(libro);
    console.log(id);
    return 'Updating a libro';
  }
}
