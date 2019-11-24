import { Component, Input } from '@angular/core';

@Component({
  selector: 'csf-info-titulo-valor',
  templateUrl: './csf-info-titulo-valor.component.html',
  styleUrls: ['./csf-info-titulo-valor.component.scss']
})
export class CsfInfoTituloValorComponent {
  @Input() classes = '';

  @Input()
  titulo: string | null = null;
}
