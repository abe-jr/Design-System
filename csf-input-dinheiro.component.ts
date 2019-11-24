import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Dinheiro } from 'csf-lib-formatador';

@Component({
  selector: 'csf-input-dinheiro',
  templateUrl: './csf-input-dinheiro.component.html',
  styleUrls: ['./csf-input-dinheiro.component.scss']
})
export class CsfInputDinheiroComponent implements OnDestroy {
  @Input() classes = '';

  @Input()
  get valor(): Dinheiro {
    return this.valorInterno;
  }
  set valor(dinheiro: Dinheiro) {
    this.valorInterno = dinheiro;
  }

  valorInterno: Dinheiro;

  editando = false;

  @Output()
  valorChange: EventEmitter<Dinheiro> = new EventEmitter<Dinheiro>();

  @ViewChild('inputDinheiro') inputDinheiroRef: ElementRef;

  timeoutRef: any;

  cliqueBotaoEditar() {
    if (this.editando) {
      this.editando = false;
      return;
    }

    this.editando = true;

    // Precisamos colocar dentro de um `setTimeout` para agendar
    // o `focus` para o próximo event loop
    this.timeoutRef = setTimeout(() =>
      this.inputDinheiroRef.nativeElement.focus(),
      0
    );
  }

  onInputBlur() {
    this.editando = false;
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutRef);
  }
}
