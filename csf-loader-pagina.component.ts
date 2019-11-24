import {
  Component,
  Input,
  HostBinding,
  Inject,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'csf-loader-pagina',
  templateUrl: './csf-loader-pagina.component.html',
  styleUrls: ['./csf-loader-pagina.component.scss']
})
export class CsfLoaderPaginaComponent implements OnChanges, OnDestroy {
  @Input() classes = '';

  @HostBinding('class.-show')
  get aberto(): boolean {
    return this.mostrarLoader;
  }

  @Input()
  mostrarLoader = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setPointerEvents(valor: 'none' | 'auto') {
    this.document.body.style.pointerEvents = valor;
  }

  ngOnChanges(changes: SimpleChanges) {
    const { mostrarLoader } = changes;

    if (mostrarLoader.currentValue) {
      this.setPointerEvents('none');
    } else {
      this.setPointerEvents('auto');
    }
  }

  ngOnDestroy() {
    this.setPointerEvents('auto');
  }
}
