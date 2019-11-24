import { Component, Input } from '@angular/core';
import { VariantesInfoDestaque } from '../../models';

@Component({
  selector: 'csf-info-destaque',
  templateUrl: './csf-info-destaque.component.html',
  styleUrls: ['./csf-info-destaque.component.scss']
})
export class CsfInfoDestaqueComponent {
  @Input() classes = '';

  @Input()
  tipo: VariantesInfoDestaque | null = null;

  get tipoIcone(): string {
    switch (this.tipo) {
      case VariantesInfoDestaque.Alerta: return 'info';
      default: return null;
    }
  }
}
