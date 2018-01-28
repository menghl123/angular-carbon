import {Component, ElementRef, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'ac-circular',
  template: `
    <div class="preloader-wrapper active ac-circular-{{size}}">
      <div class="spinner active spinner-{{color}}">
        <div class="circle-clipper left">
          <div class="circle" style="border-width: 3px;"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle" style="border-width: 3px;"></div>
        </div>
      </div>
    </div>
  `,
})
export class AcCircularComponent implements OnInit {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'red' | 'blue' | 'green' | 'amber' = 'amber';

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
  declarations: [AcCircularComponent],
  exports: [AcCircularComponent]
})
export class AcCircularModule {

}
