import {Component, ElementRef, Input, NgModule, OnInit, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';


@Component({
  selector: 'ac-header-bar',
  template: `
    <div class="ac-header-bar header-bar-demo">
      <ng-content></ng-content>
    </div>
  `,
})
export class AcHeaderBarComponent implements OnInit {
  @Input() leftTemplate: TemplateRef<any>;
  @Input() middleTemplate: TemplateRef<any>;
  @Input() rightTemplate: TemplateRef<any>;

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
  declarations: [AcHeaderBarComponent],
  exports: [AcHeaderBarComponent]
})
export class AcHeaderBarModule {

}
