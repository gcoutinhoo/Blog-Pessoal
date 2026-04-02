import { Module } from '@nestjs/common';
import { PostagemController } from './postagem/controller/postagem.controller';
import { PostagemService } from './postagem/services/postagem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { Tema } from './tema/entities/tema.entity';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true
    }),

    PostagemModule,
    TemaModule
  ],
  controllers: [PostagemController],
  providers: [PostagemService],
})
export class AppModule {}