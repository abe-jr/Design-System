import {
  Component,
  ContentChildren,
  QueryList,
  forwardRef,
  Input,
  ElementRef,
  ViewEncapsulation,
  ViewChild,
  HostListener,
  AfterContentInit,
  ViewChildren,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { VariantesCarrosselItem } from '../../models';

@Component({
  selector: 'csf-carrossel-item',
  templateUrl: './csf-carrossel-item.component.html',
  styleUrls: ['./csf-carrossel.component.scss']
})
export class CsfCarrosselItemComponent implements AfterViewChecked {
  @ViewChild('conteudo')
  conteudo: ElementRef;

  @Input()
  tipo: VariantesCarrosselItem | null = null;

  @Input()
  icone: string | null = null;

  largura: string;
  altura = 0;

  get tipoItem(): string | null {
    switch (this.tipo) {
      case VariantesCarrosselItem.Info: return 'info';
      default: return null;
    }
  }

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewChecked() {
    this.altura = this.conteudo.nativeElement.clientHeight;
    this.cd.detectChanges();
  }
}

@Component({
  selector: 'csf-carrossel',
  templateUrl: './csf-carrossel.component.html',
  styleUrls: ['./csf-carrossel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CsfCarrosselComponent implements AfterContentInit, AfterViewChecked {
  @Input() classes = '';

  @ContentChildren(forwardRef(() => CsfCarrosselItemComponent), { descendants: true })
  itensCarrossel: QueryList<CsfCarrosselItemComponent>;

  @ViewChildren(CsfCarrosselItemComponent)
  itensCarrosselEl: QueryList<CsfCarrosselItemComponent>;

  @ViewChild('wrapperItens')
  wrapperItens: ElementRef;

  itemAtivo = 0;

  @Input()
  altura = 'auto';

  largura = 0;

  posicaoSlides = `translateX(0)`;
  transicaoSlides = `transform 150ms ease-out`;
  ultimaPosicao = 0;

  private touchStartedAt = 0;
  private touchDelta = 0;
  alturaWrapper: number;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef
  ) { }

  onTouchStart(event: TouchEvent) {
    this.touchStartedAt = event.touches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchDelta = this.touchStartedAt - event.changedTouches['0'].screenX;

    if (this.touchDelta > 20) {
      this.avanca();
    } else if (this.touchDelta < -20) {
      this.volta();
    }

    this.touchDelta = 0;
  }

  onTouchMove(event: TouchEvent) {
    event.preventDefault();
  }

  @HostListener('window:resize')
  onResize() {
    this.largura = this.el.nativeElement.parentNode.offsetWidth;
    this.ultimaPosicao = this.itemAtivo * this.largura;
    this.posicaoSlides = `translateX(${this.ultimaPosicao + (32 * this.itemAtivo)})`;
    this.transicaoSlides = `transform ${this.ultimaPosicao / 4}ms ease-out`;
    this.itensCarrossel.forEach(carrossel => {
      carrossel.largura = `${this.largura}px`;
    });
  }

  ngAfterContentInit() {
    this.onResize();
  }

  ngAfterViewChecked() {
    this.defineAlturaItem();
  }

  setIndexAtivo(idx: number) {
    this.itemAtivo = idx;
    this.moveParaItemAtivo();
    this.defineAlturaItem();
  }

  defineAlturaItem() {
    const itemAtivo = this.itensCarrossel.find((_, idx) => this.itemAtivo === idx);

    this.alturaWrapper = itemAtivo.altura;
    this.cd.detectChanges();
  }

  moveParaItemAtivo() {
    const distancia = Math.abs(this.itemAtivo * this.largura + (this.itemAtivo * 32));
    const distanciaAnim = Math.abs(this.ultimaPosicao - distancia);
    this.posicaoSlides = `translateX(-${distancia}px)`;
    this.transicaoSlides = `transform ${distanciaAnim / 1.5}ms ease-out`;
    this.ultimaPosicao = this.itemAtivo * this.largura;
  }

  volta() {
    if (this.itemAtivo > 0) {
      this.setIndexAtivo(this.itemAtivo - 1);
    }
  }

  avanca() {
    if (this.itemAtivo < (this.itensCarrossel.length - 1)) {
      this.setIndexAtivo(this.itemAtivo + 1);
    }
  }
}
