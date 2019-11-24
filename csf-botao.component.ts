import { Component, Input, ChangeDetectionStrategy, HostBinding, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { VariantesBotao } from '../../models';

@Component({
  selector: 'csf-botao',
  templateUrl: './csf-botao.component.html',
  styleUrls: ['./csf-botao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfBotaoComponent {
  @Input() classes = '';

  @Input()
  variante: VariantesBotao;

  @Input()
  semBorda = false;

  @Input()
  disabled = false;

  get varianteBotao(): string {
    switch (this.variante) {
      case VariantesBotao.Primario: return '-main';
      case VariantesBotao.Secundario: return '-outline';
      case VariantesBotao.PrimarioQuadrado: return '-rounded';
      case VariantesBotao.SecundarioQuadrado: return '-rounded-outline';
      default: return '';
    }
  }
}
