import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { Dinheiro } from 'csf-lib-formatador';
import { Subject } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  startWith
} from 'rxjs/operators';

@Component({
  selector: 'csf-quantidade-parcelas',
  templateUrl: './csf-quantidade-parcelas.component.html',
  styleUrls: ['./csf-quantidade-parcelas.component.scss']
})
export class CsfQuantidadeParcelasComponent implements OnInit {
  @Input() classes = '';

  @Input()
  get qtdParcelas(): number {
    return this.qtdParcelasInterno;
  }
  set qtdParcelas(val: number) {
    this.qtdParcelasInterno = val;
    this.qtdParcelasChange.emit(val);
  }
  qtdParcelasInterno: number | null = null;

  @Output()
  qtdParcelasChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  valorParcela: Dinheiro;

  @Input()
  get ativo(): boolean {
    return this.ativoInterno;
  }
  set ativo(val: boolean) {
    this.ativoInterno = val;
    this.ativoChange.emit(val);
  }
  ativoInterno = false;

  @Output()
  ativoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  editando = false;

  @Input()
  carregando = false;

  @Output()
  atualizouParcelas: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  min: number;

  @Input()
  max: number;

  menorQueMinimoDeParcelas = false;

  maiorQueMaximoDeParcelas = false;

  estadoDeValidacao$: Subject<any> = new Subject();

  get mostraBotaoMais(): boolean {
    return !this.ativo && !this.editando;
  }

  get mostraValorEditavel(): boolean {
    return this.ativo && this.editando;
  }

  get mostraValor() {
    return this.ativo && !this.editando;
  }

  @ViewChild('inputQtdParcelas', {})
  inputQtdParcelasRef: ElementRef;

  ngOnInit() {
    this.estadoDeValidacao$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        startWith(this.qtdParcelas)
      )
      .subscribe(this.atualizaEstadoDeValidacao.bind(this));
  }

  atualizaEstadoDeValidacao(val) {
    if (!val || this.min === undefined || this.max === undefined) {
      return;
    }

    this.menorQueMinimoDeParcelas = val < this.min;
    this.maiorQueMaximoDeParcelas = val > this.max;
  }

  atualizouQtdParcelas(event) {
    const target = event.target as HTMLInputElement;
    const valor = parseInt(target.value, 10);
    const numeroValido = Number.isInteger(valor);
    this.estadoDeValidacao$.next(valor);

    if (numeroValido) {
      this.qtdParcelasInterno = valor;
      this.atualizouParcelas.emit(this.qtdParcelasInterno);
    } else {
      this.qtdParcelasInterno = 0;
      this.atualizouParcelas.emit(0);
    }
  }

  desativaAlteracaoDeValor(event) {
    this.editando = false;

    if (event.target.value === '') {
      this.qtdParcelas = 0;
    }
  }

  ativaAlteracaoDeValor() {
    this.editando = true;
    this.ativo = true;

    setTimeout(() => {
      this.inputQtdParcelasRef.nativeElement.focus();
    }, 0);
  }
}
