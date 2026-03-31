import { Module } from '@nestjs/common';
import { PostagemController } from './postagem/controller/postagem.controller';
import { PostagemService } from './postagem/services/postagem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true
    }),

    TypeOrmModule.forFeature([Postagem]),
  ],
  controllers: [PostagemController],
  providers: [PostagemService],
})
export class AppModule {}