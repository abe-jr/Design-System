import { Component, Directive, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Directive({
  selector: '[csf-lista-item-icone-esquerda], [csfListaItemIconeEsquerda]',
})
export class CsfListaItemIconeEsquerdaDirective { }

@Directive({
  selector: '[csf-lista-item-icone-direita], [csfListaItemIconeDireita]',
})
export class CsfListaItemIconeDireitaDirective { }

@Directive({
  selector: 'csf-lista-item-titulo, [csf-lista-item-titulo], [csfListaItemTitulo]',
})
export class CsfListaItemTituloDirective { }

@Directive({
  selector: 'csf-lista-item-subtitulo, [csf-lista-item-subtitulo], [csfListaItemSubtitulo]',
})
export class CsfListaItemSubtituloDirective { }

@Directive({
  selector: 'csf-lista-item-descricao, [csf-lista-item-descricao], [csfListaItemDescricao]',
})
export class CsfListaItemDescricaoDirective { }

@Directive({
  selector: 'csf-lista-item-texto, [csf-lista-item-texto], [csfListaItemTexto]',
})
export class CsfListaItemTextoDirective { }

@Component({
  selector: 'csf-lista-link',
  templateUrl: './csf-lista-link.component.html',
  styleUrls: ['./csf-lista.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfListaLinkComponent {
  @Input() classes = '';
  @Input() href: string | null = null;
  @Input() external = false;
  @Input() icone = '';
}

@Component({
  selector: 'csf-lista-item',
  templateUrl: './csf-lista-item.component.html',
  styleUrls: ['./csf-lista.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfListaItemComponent {
  @Input() classes = '';
}

@Component({
  selector: 'csf-lista',
  templateUrl: './csf-lista.component.html',
  styleUrls: ['./csf-lista.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfListaComponent {
  @Input() classes = '';
}
