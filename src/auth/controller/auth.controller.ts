import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { Usuariologin } from "../entities/usuariologin.entity";


@Controller("/usuarios") 
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar') // localhost:000/usuarios/logar
    login(@Body() usuario: Usuariologin): Promise<any> {
        return this.authService.login(usuario);
    }

    
}