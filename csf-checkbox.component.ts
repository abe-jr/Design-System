import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'csf-checkbox',
  templateUrl: './csf-checkbox.component.html',
  styleUrls: ['./csf-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsfCheckboxComponent),
      multi: true
    }
  ]
})
export class CsfCheckboxComponent implements ControlValueAccessor {
  @Input() classes = '';

  @Input()
  name: string | null = null;

  @Input()
  value: string;

  @Input()
  label = '';

  @Input()
  get checked(): boolean {
    return this.checkedInterno;
  }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this.checkedInterno = value;
      this.changeDetectorRef.markForCheck();
    }
  }

  checkedInterno = false;

  @Input()
  get disabled(): boolean {
    return this.disabledInterno;
  }
  set disabled(value: boolean) {
    this.disabledInterno = value;
    this.changeDetectorRef.markForCheck();
  }

  private disabledInterno = false;

  @Output() readonly change: EventEmitter<Event> = new EventEmitter();

  onChange: (value: any) => void = () => {};
  onTouched: (value: any) => void = () => {};

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  writeValue(value: any) {
    this.checked = Boolean(value);
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this.onTouched = fn;
  }

  stopPropagation(event: any): void {
    event.stopPropagation();
  }

  private emiteChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChange(target.checked);
    this.change.emit(event);
  }

  private toggle() {
    this.checked = !this.checked;
  }

  _onInputClick(event) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggle();
      this.emiteChange(event);
    }
  }
}
