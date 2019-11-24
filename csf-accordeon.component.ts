import { Component, OnInit, Input, Directive, ChangeDetectionStrategy } from '@angular/core';
import { EstadoInicialAccordeon } from '../../models';

@Directive({
  selector: 'csf-accordeon-header, [csf-accordeon-header], [csfAccordeonHeader]'
})
export class CsfAccordeonHeaderDirective { }

@Directive({
  selector: 'csf-accordeon-descricao, [csf-accordeon-descricao], [csfAccordeonDescricao]'
})
export class CsfAccordeonDescricaoDirective { }

@Component({
  selector: 'csf-accordeon',
  templateUrl: './csf-accordeon.component.html',
  styleUrls: ['./csf-accordeon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfAccordeonComponent implements OnInit {
  @Input() classes = '';

  @Input()
  estadoInicial: string = EstadoInicialAccordeon.Aberto;

  aberto = false;

  ngOnInit() {
    this.aberto = this.estadoInicial === EstadoInicialAccordeon.Aberto ? true : false;
  }

  toggleEstado() {
    this.aberto = !this.aberto;
  }
}
