import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'csf-modal',
  templateUrl: './csf-modal.component.html',
  styleUrls: ['./csf-modal.component.scss']
})
export class CsfModalComponent implements OnChanges {
  @Input() classes = '';

  @Input()
  get aberto(): boolean {
    return this.abertoInterno;
  }
  set aberto(valor: boolean) {
    this.abertoChange.emit(valor);
    this.abertoInterno = valor;
  }
  abertoInterno = false;

  @Output()
  abertoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  abriu: EventEmitter<null> = new EventEmitter<null>();

  @Output()
  fechou: EventEmitter<null> = new EventEmitter<null>();

  ngOnChanges(changes: SimpleChanges) {
    const { aberto } = changes;

    if (!aberto.previousValue && !!aberto.currentValue) {
      this.abriu.emit();
    } else {
      this.fechou.emit();
    }
  }

  clickOverlay(event) {
    event.preventDefault();
    this.aberto = false;
  }

  removePropagacao(event) {
    event.stopPropagation();
  }
}

@Component({
  selector: 'csf-modal-titulo',
  template: `
    <div class="csf-modal-titulo">
      <csf-tipografia variante="subtitulo">
        <ng-content></ng-content>
      </csf-tipografia>
    </div>
  `,
  styleUrls: ['./csf-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CsfModalTituloComponent {}

@Component({
  selector: 'csf-modal-conteudo',
  template: `
    <div class="csf-modal-conteudo">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./csf-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CsfModalConteudoComponent {}

@Component({
  selector: 'csf-modal-acoes',
  template: `
    <div class="csf-modal-acoes">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./csf-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CsfModalAcoesComponent { }
