import { Component, Input } from '@angular/core';
import { VariantesBarraDeProgresso } from '../../models';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'csf-barra-de-progresso',
  templateUrl: './csf-barra-de-progresso.component.html',
  styleUrls: ['./csf-barra-de-progresso.component.scss'],
  animations: [
    trigger('progressBarAnimation', [
      transition(':enter', [
        animate(
          '400ms',
          keyframes([
            style({ transformOrigin: 'center center', transform: 'scale(0,0)' }),
            style({ transformOrigin: 'center center', transform: 'scale(1,1)' }),
            style({
              transformOrigin: 'center center',
              transform: 'scale(1.1, 1)',
            }),
            style({ transformOrigin: 'center center', transform: 'scale(1,1)' }),
          ])
        ),
      ]),
    ])
  ]
})
export class CsfBarraDeProgressoComponent {
  @Input() classes = '';

  @Input()
  get valor(): number {
    return this.valorInterno;
  }
  set valor(val: number) {
    if (typeof val !== 'number' || val < 0) {
      this.valorInterno = 0;
    }

    if (val > 100) {
      this.valorInterno = 100;
    }

    this.valorInterno = val;
  }

  valorInterno = 0;

  @Input()
  variante: VariantesBarraDeProgresso = VariantesBarraDeProgresso.Claro;

  get classeTema() {
    return this.variante === VariantesBarraDeProgresso.Claro
      ? '-claro'
      : '-escuro';
  }
}
