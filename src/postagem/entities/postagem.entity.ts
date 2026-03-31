import { IsNotEmpty} from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}