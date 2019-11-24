import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EstadoLinhaDeEvento } from '../../models';

@Component({
  selector: 'csf-linha-de-eventos',
  templateUrl: './csf-linha-de-eventos.component.html',
  styleUrls: ['./csf-linha-de-eventos.component.scss']
})
export class CsfLinhaDeEventosComponent implements OnInit, OnChanges {
  @Input() classes = '';

  @Input()
  itens: any[] = [];

  @Input()
  ativo: string | null = null;

  @Input()
  estado: EstadoLinhaDeEvento = EstadoLinhaDeEvento.Sucesso;

  indexSelecionado: number | null = null;

  ngOnInit() {
    this.atualizaIndexSelecionado(this.ativo);
  }

  ngOnChanges(changes: SimpleChanges) {
    const { ativo } = changes;

    if (ativo) {
      this.atualizaIndexSelecionado(ativo.currentValue);
    }
  }

  private atualizaIndexSelecionado(ativo: string) {
    this.itens.forEach((item, index) => {
      if (item.id === ativo) {
        this.indexSelecionado = index;
      }
    });
  }

  get classesEstado() {
    switch (this.estado) {
      case EstadoLinhaDeEvento.Erro: return '-erro';
      default: return '';
    }
  }
}
