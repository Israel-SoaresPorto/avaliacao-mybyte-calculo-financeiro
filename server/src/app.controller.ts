import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { JurosSimplesDto } from './dto/juros-simples.dto';
import { JurosCompostoDto } from './dto/juros-composto.dto';
import { ValorPresenteDto } from './dto/valor-presente.dto ';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('juros-simples')
  jurosSimples(@Body() body: JurosSimplesDto) {
    return this.appService.calcularJurosSimples(body);
  }

  @Post('juros-composto')
  jurosComposto(@Body() body: JurosCompostoDto) {
    return this.appService.calcularJurosComposto(body);
  }

  @Post('valor-presente')
  parcelaFutura(@Body() body: ValorPresenteDto) {
    return this.appService.calcularValorPresente(body);
  }
}
