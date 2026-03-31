import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // importa o modulo com as entidades 
    providers: [PostagemService], // importa o modulo com os servicos como provedor 
    controllers: [PostagemController], // importa o modulo com os controladores
    exports: [TypeOrmModule] // exporta o typeorm
})
export class PostagemModule {}
