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
import {AcMenuItem} from '../ac-model/model';

@Component({
  selector: 'ac-select',
  template: `
    <div class="ac-select">
      <div (click)="onInputClick()" class="ac-select-text placeholder">{{message}}</div>
      <i class="icon icon-arrow_drop_down" style="font-size: 24px;"></i>
      <div class="ac-select-drop-down" [ngStyle]="{'display':showBars ? 'inline':'none'}">
        <ul class="ac-select-options">
          <ng-container *ngFor="let $item of menuItems">
            <li (click)="onItemClick($event,$item)">
              <a href="javascript:;" class="ac-select-option" [class.selected]="$item === item">
                <div class="ac-select-option-content"> {{$item?.title}}</div>
                <i class="icon icon-check" style="font-size: 24px;"></i>
                <div class="ac-ripple-ink"></div>
              </a>
            </li>
          </ng-container>
        </ul>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AcSelectComponent),
    multi: true
  }]
})
export class AcSelectComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() menuItems: AcMenuItem[];

  get message() {
    return this.label || this.placeholder || '';
  }

  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  private showBars: boolean = false;
  private checked: boolean = false;
  private model: any;
  private item: any;
  private label: string;

  private onChange = (_: any) => null;
  private onTouched = () => null;

  constructor(private elementRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

  onInputClick() {
    this.showBars = !this.showBars;
  }

  onItemClick($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.model = item.value;
    this.item = item;
    this.label = this.item.title;
    this.onChange(this.model);
    this.showBars = false;
  }

  writeValue(obj: any): void {
    this.model = obj;
    this.item = this.menuItems.filter($item => $item.value === obj)[0];
    this.onChange(this.model);
    if (this.item && this.item.title) {
      this.label = this.item.title
    }
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
  declarations: [AcSelectComponent],
  exports: [AcSelectComponent]
})
export class AcSelectModule {

}
