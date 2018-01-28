import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
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
  selector: 'ac-switch',
  template: `
    <label class="ac-switch label-left"> <input (click)="onClick($event)" [(ngModel)]="checked" type="checkbox">
      <div class="ac-switch-label">{{label}}</div>
      <div class="ac-switch-checkbox"></div>
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AcSwitchComponent),
    multi: true
  }]
})
export class AcSwitchComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() leftValue: any = false;
  @Input() rightValue: any = true;

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


  onClick($event) {
    this.model = this.checked === true ? this.leftValue : this.rightValue;
    this.onChange(this.model);
    this.modelChange.emit(this.model);
  }

  writeValue(obj: any): void {
    this.model = obj;
    this.checked = obj === this.rightValue;
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
  declarations: [AcSwitchComponent],
  exports: [AcSwitchComponent]
})
export class AcSwitchModule {

}
