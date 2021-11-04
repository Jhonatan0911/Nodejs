import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import { LibrosModule } from './libros/libros.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libros/schemas/libro.schema';

@Module({
  imports: [
    LibrosModule,
    MongooseModule.forFeature([{ name: 'Libro', schema: LibroSchema }]),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}
