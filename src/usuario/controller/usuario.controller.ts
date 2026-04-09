import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
 
 
@Controller("/usuarios")
export class UsuarioController{
 
    constructor(private readonly usuarioService: UsuarioService){ }
 
    @UseGuards(JwtAuthGuard)
    @Get('/all') // http://localhost:4000/usuarios/all
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }
 
    @UseGuards(JwtAuthGuard)
    @Get('/:id') // http://localhost:4000/usuarios/1
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id)
    }

    @Post('/cadastrar') // http://localhost:4000/usuarios/cadastrar
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario)
    }
 
    @UseGuards(JwtAuthGuard)
    @Put('/atualizar') // http://localhost:4000/usuarios/atualizar
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.update(usuario)
    }
 
}