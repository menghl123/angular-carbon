import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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

// todo
@Component({
  selector: 'ac-radio',
  template: `
    <label class="ac-radio">
      <input (click)="onInputClick()" [(ngModel)]="checked" type="radio" [name]="name">
      <div class="ac-radio-icon"></div>
      <div class="ac-radio-label">{{label}}</div>
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AcRadioComponent),
    multi: true
  }]
})
export class AcRadioComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() uncheckedValue: any = false;
  @Input() checkedValue: any = true;
  @Input() name: string;

  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  private checked: boolean = false;
  private model: any;

  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private elementRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }


  onInputClick() {
    this.model = this.checked === true ? this.checkedValue : this.uncheckedValue;
    this.onChange(this.model);
    this.modelChange.emit(this.model);
  }

  writeValue(obj: any): void {
    this.model = obj;
    this.checked = obj === this.checkedValue;
    this.onChange(this.model);
    this.changeDetectorRef.markForCheck();
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
  declarations: [AcRadioComponent],
  exports: [AcRadioComponent]
})
export class AcRadioModule {

}
