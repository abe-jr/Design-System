import {
  Component,
  Directive,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'csf-card-header',
  templateUrl: './csf-card-header.component.html',
  styleUrls: ['./csf-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfCardHeaderComponent {}

@Component({
  selector: 'csf-card-titulo',
  template: `
    <div class="csf-card-titulo">
      <csf-tipografia variante="subtitulo">
        <ng-content></ng-content>
      </csf-tipografia>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfCardTituloComponent {}

@Directive({
  selector: 'csf-card-conteudo, [csf-card-conteudo], [csfCardConteudo]'
})
export class CsfCardConteudoDirective {
  @HostBinding('class')
  class = 'csf-card-conteudo';
}

@Directive({
  selector: 'csf-card-acoes, [csf-card-acoes], [csfCardAcoes]'
})
export class CsfCardAcoesDirective {
  @HostBinding('class')
  class = 'csf-card-acoes';
}

@Directive({
  selector: 'csf-card-botao-acao, [csf-card-botao-acao], [csfCardBotaoAcao]'
})
export class CsfCardBotaoAcaoDirective {
  @HostBinding('class')
  class = 'csf-card-botao-acao';
}

@Component({
  selector: 'csf-card',
  templateUrl: './csf-card.component.html',
  styleUrls: ['./csf-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfCardComponent {
  @Input() classes = '';

  @Input()
  semSombra = false;
}
