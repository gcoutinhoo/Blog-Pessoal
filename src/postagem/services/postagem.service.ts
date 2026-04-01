import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>){}
    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); // select * from tb_postagem
    }
    
        async findById(id: number): Promise<Postagem>{ // select * from tb_postagem where id = ?
        const postagem = await this.postagemRepository.findOne({ 
            where: {
                id 
            }
        });
        if(!postagem) // se nenhuma postagem for encontrada
                throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND); 
        return postagem; // retorna a postagem
    }

    async findAllByTitulo(titulo: string): Promise<Postagem[]>{
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`) // ILike faz uma busca sem distincção de maiúsculas e minúsculas
            }
        });
    }

    async create(postagem: Postagem): Promise<Postagem>{ 
        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem>{
        await this.findById(postagem.id);
        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id);
        return await this.postagemRepository.delete(id);
    }
}