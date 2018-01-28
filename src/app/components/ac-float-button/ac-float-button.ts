import {Component, ElementRef, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';


@Component({
  selector: 'ac-float-button',
  template: `
    <a href="javascript:;" [ngClass]="{'ac-float-button-fixed':fixed}" class="ac-float-button ac-float-button-{{type}}">
      <i class="icon {{icon}}" style="font-size: 24px;"></i>
      <div class="ac-ripple-ink color-ren"></div>
    </a>
  `,
})
export class AcFloatButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() fixed: string;
  @Input() type: 'carbon' | 'red' | 'green' | 'amber' | 'blue' = 'carbon';

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

}


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AcFloatButtonComponent],
  exports: [AcFloatButtonComponent]
})
export class AcFloatButtonModule {

}
