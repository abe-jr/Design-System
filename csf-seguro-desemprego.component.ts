import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'csf-seguro-desemprego',
  templateUrl: './csf-seguro-desemprego.component.html',
  styleUrls: ['./csf-seguro-desemprego.component.scss']
})
export class CsfSeguroDesempregoComponent {
  @Input() classes = '';

  @Input()
  get valorCheckbox(): boolean {
    return this.valorCheckboxInterno;
  }
  set valorCheckbox(val: boolean) {
    if (val !== this.valorCheckbox) {
      this.valorCheckboxChange.emit(val);
      this.valorCheckboxInterno = val;
    }
  }

  valorCheckboxInterno = false;

  @Output()
  valorCheckboxChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  clicouCondicoesGerais: EventEmitter<any> = new EventEmitter();

  clickCondicoesGerais() {
    this.clicouCondicoesGerais.emit();
  }
}
