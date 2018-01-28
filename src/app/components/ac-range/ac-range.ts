import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  NgModule,
  OnInit,
  Output
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'ac-range',
  template: `
    <div class="ac-range">
      <input (input)="onInputChange($event.target.value)"
             #input type="range" [step]="step" [min]="min" [max]="max">
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AcRangeComponent),
    multi: true
  }]
})
export class AcRangeComponent implements OnInit, ControlValueAccessor {
  @Input() step: any = 0.1;
  @Input() min: any = 0;
  @Input() max: any = 100;
  @Input() disabled: any;


  @Output() modelChange: EventEmitter<any> = new EventEmitter();
  private model: any;
  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private elementRef: ElementRef) {
  }

  onInputChange(value) {
    this.model = value;
    this.onChange(this.model);
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

  writeValue(obj: any): void {
    this.model = obj;
    this.onChange(this.model);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AcRangeComponent],
  exports: [AcRangeComponent]
})
export class AcRangeModule {

}
