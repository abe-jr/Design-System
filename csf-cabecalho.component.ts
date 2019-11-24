import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cores, VariantesCabecalho } from '../../models';
import { CsfCabecalhoService } from './csf-cabecalho.service';

@Component({
  selector: 'csf-cabecalho',
  templateUrl: './csf-cabecalho.component.html',
  styleUrls: ['./csf-cabecalho.component.scss']
})
export class CsfCabecalhoComponent {
  @Input() classes = '';

  @Input()
  get variante(): VariantesCabecalho {
    return this.cabecalhoService.configuracao.variante;
  }
  set variante(variante: VariantesCabecalho) {
    this.cabecalhoService.configurar({ variante });
  }

  @Input()
  get titulo() {
    return this.cabecalhoService.configuracao.titulo;
  }
  set titulo(titulo) {
    this.cabecalhoService.configurar({ titulo });
  }

  @Input()
  get mostrarCabecalho(): boolean {
    return this.cabecalhoService.configuracao.mostrarCabecalho;
  }
  set mostrarCabecalho(valor: boolean) {
    this.cabecalhoService.configurar({
      mostrarCabecalho: valor
    });
  }

  @Input()
  get mostrarBotaoVoltar(): boolean {
    return this.cabecalhoService.configuracao.mostrarBotaoVoltar;
  }
  set mostrarBotaoVoltar(valor: boolean) {
    this.cabecalhoService.configurar({
      mostrarBotaoVoltar: valor
    });
  }

  @Input()
  get mostrarBotaoFechar(): boolean {
    return this.cabecalhoService.configuracao.mostrarBotaoFechar;
  }
  set mostrarBotaoFechar(valor: boolean) {
    this.cabecalhoService.configurar({
      mostrarBotaoFechar: valor
    });
  }

  @Output()
  clicouVoltar: EventEmitter<any> = new EventEmitter();

  @Output()
  clicouFechar: EventEmitter<any> = new EventEmitter();

  constructor(private cabecalhoService: CsfCabecalhoService) { }

  clickVoltar() {
    this.clicouVoltar.emit();
    this.cabecalhoService.configuracao.clickVoltarCallback();
  }

  clickFechar() {
    this.clicouFechar.emit();
    this.cabecalhoService.configuracao.clickFecharCallback();
  }

  get classeTema() {
    return this.variante === VariantesCabecalho.Claro ? '-fundobranco' : '';
  }

  get corSetas() {
    return this.variante === VariantesCabecalho.Claro
      ? Cores.Primaria
      : 'white';
  }
}
