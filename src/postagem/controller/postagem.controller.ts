import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";


@Controller("/postagem") 
export class PostagemController {
    constructor(private readonly postagemService: PostagemService){} // injecao de dependencia

    @Get() // rota
    @HttpCode(HttpStatus.OK) // status
    findAll(): Promise<Postagem[]>{ 
        return this.postagemService.findAll(); 
    }
}