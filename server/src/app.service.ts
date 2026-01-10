import { Injectable } from '@nestjs/common';
import { JurosSimplesDto } from './dto/juros-simples.dto';
import { JurosCompostoDto } from './dto/juros-composto.dto';
import { ValorPresenteDto } from './dto/valor-presente.dto ';

@Injectable()
export class AppService {
  calcularJurosSimples(jurosSimples: JurosSimplesDto) {
    const juros =
      jurosSimples.capital_inicial *
      jurosSimples.taxa_juros *
      jurosSimples.tempo;

    const montanteFinal = jurosSimples.capital_inicial + juros;

    return {
      juros,
      montante_final: montanteFinal,
    };
  }

  calcularJurosComposto(jurosComposto: JurosCompostoDto) {
    const taxaJurosMaisUm = 1 + jurosComposto.taxa_juros;

    const montanteFinal =
      jurosComposto.capital_inicial *
      Math.pow(taxaJurosMaisUm, jurosComposto.tempo);

    const juros = montanteFinal - jurosComposto.capital_inicial;

    return {
      juros,
    };
  }

  calcularValorPresente(valorPresente: ValorPresenteDto) {
    const taxaJurosMaisUm = 1 + valorPresente.taxa_juros;

    const valorPresenteCalculado =
      valorPresente.valor_futuro /
      Math.pow(taxaJurosMaisUm, valorPresente.tempo);

    return { valor_presente: valorPresenteCalculado };
  }
}
