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
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ac-search',
  exportAs: 'search',
  template: `
    <div class="ac-search-bar " [ngClass]="{'ac-searchbar-active':active}">
      <div class="ac-searchbar-input">
        <input [value]="" (input)="onInput($event.target.value)" (focus)="onFocus($event)" (blur)="onBlur($event)"
               type="search" [placeholder]="placeholder">
        <div (click)="onClear($event)">
          <a *ngIf="showDelete" class="ac-searchbar-clear"></a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AcSearchComponent),
    multi: true
  }]
})
export class AcSearchComponent implements OnInit, ControlValueAccessor {
  @Input() active: boolean;
  @Input() disabled: boolean;
  @Input() showDelete: boolean;
  @Input() placeholder: string = '搜索';
  @Output() valueChange = new EventEmitter<any>();
  private model: any;

  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  onFocus($event) {
    this.active = true;
  }

  onBlur($event) {
    this.active = false;
  }

  onInput(value) {
    this.model = value || '';
    this.onChange(this.model);
  }

  onClear($event) {
    debugger
    this.model = '';
    this.onChange(this.model);
  }

  writeValue(obj: any): void {
    this.model = obj;
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
    CommonModule, FormsModule
  ],
  declarations: [AcSearchComponent],
  exports: [AcSearchComponent]
})
export class AcSearchModule {

}
