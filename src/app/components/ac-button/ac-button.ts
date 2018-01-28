import {Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';


@Component({
  selector: 'ac-button',
  template: `
    <a (click)="onClick($event)" href="javascript:;" class="ac-button {{generateType()}}">
      <span class="ac-button-text">
        <ng-content></ng-content>
      </span>
      <div class="ac-ripple-ink"></div>
    </a>
  `,
})
export class AcButtonComponent implements OnInit {
  @Input() type: 'raised' | 'fill' | 'raised-fill';
  @Input() color: 'red' | 'blue' | 'green' | 'amber';
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  onClick($event) {
    this.click.emit($event);
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

  generateType() {
    let type = this.type ? `ac-button-${this.type}` : '';
    type = type === 'ac-button-raised-fill' ? 'ac-button-raised ac-button-fill' : type;
    const color = this.color ? `color-${this.color}` : '';
    return `${type} ${color}`;
  }

}


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AcButtonComponent],
  exports: [AcButtonComponent]
})
export class AcButtonModule {

}
