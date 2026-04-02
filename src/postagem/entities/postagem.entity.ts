import { IsNotEmpty} from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_postagem"}) // cria uma tabela no banco
export class Postagem {

    @PrimaryGeneratedColumn() // cria uma chave primaria e auto increment
    id!: number;

    @IsNotEmpty() // verifica se o campo esta vazio
    @Column({length: 255, nullable: false})// cria uma coluna chamada titulo com 255 caracteres e nao pode ser nulo
    titulo!: string;

    @IsNotEmpty() // verifica se o campo esta vazio
    @Column() // cria uma coluna chamada texto
    texto!: string;

    @UpdateDateColumn() // atualiza a data
    data!: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, { // cria uma chave estrangeira
        onDelete: "CASCADE"
    })
    tema!: Tema
}