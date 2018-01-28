import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'ac-mark',
  template: `
    <i class="icon fa {{icon}}" style="margin-left: 15px; font-size: 24px;margin-right: 5px">
      <em class="ac-badge ac-badge-{{type}}"> {{count}} </em>
    </i>
  `,
})
export class AcMarkComponent implements OnInit {
  @Input() icon: string;
  @Input() type: 'carbon' | 'blue' | 'red' | 'green' | 'amber';
  @Input() count: number;

  constructor() {
  }

  generateType() {
    return this.type ? `ac-badge-${this.type}` : '';
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'ac-badge',
  template: `
    <em class="ac-badge {{generateType()}}">
      <ng-content></ng-content>
    </em>
  `,
})
export class AcBadgeComponent implements OnInit {
  @Input() type: 'carbon' | 'blue' | 'red' | 'green' | 'amber';

  constructor() {
  }

  generateType() {
    return this.type ? `ac-badge-${this.type}` : '';
  }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AcBadgeComponent, AcMarkComponent],
  exports: [AcBadgeComponent, AcMarkComponent]
})
export class AcBadgeModule {

}
