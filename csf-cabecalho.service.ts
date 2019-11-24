import { Injectable } from '@angular/core';
import { VariantesCabecalho } from '../../models';

interface OpcoesConfiguracaoCabecacalho {
  variante?: VariantesCabecalho;
  titulo?: string;
  mostrarCabecalho?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoFechar?: boolean;
  clickVoltarCallback?: () => any;
  clickFecharCallback?: () => any;
}

@Injectable({
  providedIn: 'root'
})
export class CsfCabecalhoService {
  configuracao: OpcoesConfiguracaoCabecacalho = {
    variante: VariantesCabecalho.Escuro,
    titulo: '',
    mostrarCabecalho: true,
    mostrarBotaoVoltar: true,
    mostrarBotaoFechar: false,
    clickVoltarCallback: () => { },
    clickFecharCallback: () => { }
  };

  public configurar(opcoes: OpcoesConfiguracaoCabecacalho) {
    Object.assign(this.configuracao, opcoes);
  }
}
