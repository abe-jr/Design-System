import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  forwardRef,
  Input,
  AfterContentInit,
  Optional,
  ChangeDetectorRef,
  HostBinding,
  ChangeDetectionStrategy,
  Directive,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VariantesRadio } from '../../models';

let proximoIdUnico = 0;

@Directive({
  selector: 'csf-radio-grupo',
  exportAs: 'csfRadioGrupo',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CsfRadioGrupoDirective),
    multi: true
  }]
})
export class CsfRadioGrupoDirective implements AfterContentInit, ControlValueAccessor {
  @HostBinding('class') className = 'csf-radio-grupo';

  @HostBinding('attr.role') role = 'radiogroup';

  @Input()
  get value(): string {
    return this.valueInterno;
  }
  set value(value: string) {
    if (this.valueInterno !== value) {
      this.valueInterno = value;

      this.atualizaRadioSelecionado();
      this.checkRadioSelecionado();
    }
  }

  private valueInterno: any = null;

  @Input()
  get name(): string {
    return this.nameInterno;
  }
  set name(value: string) {
    this.nameInterno = value;
  }

  private nameInterno = `csf-radio-${proximoIdUnico++}`;

  @Input()
  get selecionado(): CsfRadioComponent | null {
    return this.selecionadoInterno;
  }
  set selecionado(radio: CsfRadioComponent | null) {
    this.selecionadoInterno = radio;
    this.value = radio ? radio.value : null;
  }

  private selecionadoInterno: CsfRadioComponent | null = null;

  @Input()
  get disabled(): boolean {
    return this.disabledInterno;
  }
  set disabled(value: boolean) {
    this.disabledInterno = value;
  }

  private disabledInterno = false;

  @Input()
  tipo: VariantesRadio | null = null;

  @Output() readonly change: EventEmitter<Event> = new EventEmitter<Event>();

  /* tslint:disable-next-line */
  @ContentChildren(forwardRef(() => CsfRadioComponent), { descendants: true })
  radios: QueryList<CsfRadioComponent>;

  onChange: (value: any) => void = () => { };
  onTouched: (value: any) => void = () => { };

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    this.atualizaRadioNames();
  }

  private checkRadioSelecionado() {
    if (this.selecionadoInterno && !this.selecionadoInterno.checked) {
      this.selecionadoInterno.checked = true;
    }
  }

  private atualizaRadioSelecionado(): void {
    const jaEstaSelecionado = this.selecionadoInterno !== null && this.selecionadoInterno.value === this.valueInterno;

    if (this.radios && !jaEstaSelecionado) {
      this.selecionadoInterno = null;
      this.radios.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this.selecionadoInterno = radio;
        }
      });
    }
  }

  private atualizaRadioNames() {
    if (this.radios) {
      this.radios.forEach(radio => {
        if (this.tipo) {
          radio.tipo = this.tipo;
        }
        radio.name = this.name;
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  writeValue(value: any) {
    this.value = value;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this.onTouched = fn;
  }

  emiteChange(event: Event): void {
    this.change.emit(event);
  }
}

@Component({
  selector: 'csf-radio',
  exportAs: 'csfRadio',
  templateUrl: './csf-radio.component.html',
  styleUrls: ['./csf-radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CsfRadioComponent implements OnInit {
  private idUnico = `csf-radio-button-${++proximoIdUnico}`;

  @Input() classes = '';

  @Input()
  id: string = this.idUnico;

  @Input()
  name: string;

  @Input()
  get checked(): boolean {
    return this.checkedInterno;
  }
  set checked(value: boolean) {
    this.checkedInterno = value;
  }

  checkedInterno = false;

  @Input()
  get value(): string {
    return this.valueInterno;
  }
  set value(value: string) {
    this.valueInterno = value;
  }

  private valueInterno: any = null;

  @Input()
  get disabled(): boolean {
    return this.disabledInterno;
  }
  set disabled(value: boolean) {
    this.disabledInterno = value;
  }

  private disabledInterno = false;

  @Input()
  get required(): boolean {
    return this.requiredInterno;
  }
  set required(value: boolean) {
    this.requiredInterno = value;
  }

  private requiredInterno = false;

  tipo: VariantesRadio | null = null;

  @Output() readonly change: EventEmitter<Event> = new EventEmitter<Event>();

  grupoRadio: CsfRadioGrupoDirective;

  constructor(
    @Optional() grupoRadio: CsfRadioGrupoDirective
  ) {
    this.grupoRadio = grupoRadio;
  }

  ngOnInit() {
    if (this.grupoRadio) {
      this.checked = this.grupoRadio.value === this.valueInterno;
      this.name = this.grupoRadio.name;
    }
  }

  emiteChange(event: Event) {
    this.change.emit(event);
  }

  onInputClick(event: Event) {
    event.stopPropagation();
  }

  onInputChange(event: Event) {
    event.stopPropagation();

    const valorGrupoMudou = this.grupoRadio && this.value !== this.grupoRadio.value;
    this.checked = true;
    this.emiteChange(event);

    if (this.grupoRadio) {
      this.grupoRadio.onChange(this.value);
      if (valorGrupoMudou) {
        this.grupoRadio.emiteChange(event);
      }
    }
  }
}
