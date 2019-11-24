import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChild,
  Directive,
  ElementRef,
  AfterContentInit,
  ChangeDetectorRef,
  Input,
  HostListener,
  ViewChild,
  AfterViewInit,
  Optional,
  Self,
  HostBinding
} from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { EstadoCampoInput } from '../../models';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[csf-input], [csfInput]',
  exportAs: 'csfInput'
})
export class CsfInputDirective implements AfterContentInit {
  public focado = false;
  public labelFlutuante = false;
  public desabilitado: boolean;

  @Input()
  placeholder = '';

  public readonly mudancaEstado: Subject<void> = new Subject<void>();
  public readonly classesCSS: Subject<DOMTokenList> = new Subject<
    DOMTokenList
  >();

  constructor(
    public elementRef: ElementRef<HTMLInputElement>,
    @Optional() @Self() public ngControl: NgControl
  ) { }

  _onInput() { }

  @HostListener('focus')
  onFocus() {
    this.focado = true;
    this.labelFlutuante = true;
    this.mudancaEstado.next();
    this.atualizaObservableClassesCss();
  }

  @HostListener('blur')
  onBlur() {
    this.verificaLabelFlutuante();
    this.atualizaObservableClassesCss();
  }

  ngAfterContentInit() {
    this.verificaLabelFlutuante();
    this.atualizaObservableClassesCss();
    this.verificaAtributoDisabled();
  }

  verificaLabelFlutuante() {
    if (this.elementRef.nativeElement.value.length > 0) {
      this.labelFlutuante = true;
    } else {
      this.labelFlutuante = false;
    }
    this.mudancaEstado.next();
  }

  verificaAtributoDisabled() {
    this.desabilitado = this.ngControl && this.ngControl.disabled;
  }

  private atualizaObservableClassesCss() {
    this.classesCSS.next(this.elementRef.nativeElement.classList);
  }
}

@Component({
  selector: 'csf-campo-form-acao',
  template: `
    <csf-icone [classes]="classes">{{ icone }}</csf-icone>
  `
})
export class CsfCampoFormAcaoComponent {
  @Input() icone: string | null = null;
  @Input() classes = '';
}

@Component({
  selector: 'csf-campo-form',
  exportAs: 'csfCampoForm',
  templateUrl: './csf-campo-form.component.html',
  styleUrls: ['./csf-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsfCampoFormComponent implements AfterContentInit, AfterViewInit {
  @Input() classes = '';

  @ContentChild(CsfInputDirective)
  controle: CsfInputDirective;

  @ContentChild(CsfCampoFormAcaoComponent)
  acaoComponent: CsfCampoFormAcaoComponent;

  @Input()
  textoDeApoio = '';

  @Input()
  comEstiloValidacao = false;

  @Input()
  comIcone: string | null = null;

  jaChecouTamanhoLabel = false;
  tamanhoLabel = 0;
  classeNgForm: EstadoCampoInput | string = '';

  @ViewChild('label') label: ElementRef;
  @ViewChild('gap') gap: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this.atualizaTamanhoLabel();
    this.controle.mudancaEstado.pipe(startWith(null)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.atualizaTamanhoLabel();
    this.controle.classesCSS
      .pipe(
        filter(() => this.comEstiloValidacao),
        map(this.classeCssEstadoInput),
        distinctUntilChanged(),
        startWith('')
      )
      .subscribe(estadoInput => {
        this.classeNgForm = estadoInput;
        if (this.acaoComponent) {
          this.acaoComponent.classes = estadoInput;
        }
      });
    // Habilita update quando atributos mudam no ngControl
    if (this.controle.ngControl) {
      this.controle.ngControl.valueChanges.subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  classeCssEstadoInput(classes) {
    if (!classes) {
      return null;
    }

    for (const key in EstadoCampoInput) {
      if (classes.contains(EstadoCampoInput[key])) {
        return EstadoCampoInput[key];
      }
    }
  }

  get classesCss(): string[] {
    const classes = ['outline', this.classeNgForm];
    const isDisabled =
      this.controle.ngControl && this.controle.ngControl.disabled;

    if (isDisabled) {
      classes.push('-desabilitado');
    }

    if (this.controle.labelFlutuante) {
      classes.push('-focado');
    }

    return classes;
  }

  atualizaTamanhoLabel() {
    this.tamanhoLabel = this.label.nativeElement.offsetWidth * 0.75 + 11;
    this.changeDetectorRef.detectChanges();
  }
}
