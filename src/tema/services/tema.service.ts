import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";
import { DeleteResult } from "typeorm/browser";


@Injectable()
export class TemaService {
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ){ }

    async findAll(): Promise<Tema[]>{
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });

    }
        
    async findById(id: number): Promise<Tema>{ // select * from tb_postagem where id = ?
        let tema = await this.temaRepository.findOne({ 
            where: {
                id 
            },
            relations: {
                postagem: true
            }
        });
        if(!tema) // se nenhum tema for encontrada
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND); 
            return tema; // retorna a tema
    }
    
    async findAllByDescricao(descricao: string): Promise<Tema[]>{
        return await this.temaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`) // ILike faz uma busca sem distincção de maiúsculas e minúsculas
            },
            relations: {
                postagem: true
            }
        });
    }
    
    async create (tema: Tema): Promise<Tema>{ 
        return await this.temaRepository.save(tema);
    }
    
    async update(tema: Tema): Promise<Tema>{
        await this.findById(tema.id);
        return await this.temaRepository.save(tema);
    }
    
    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id);
        return await this.temaRepository.delete(id);
    }
}
