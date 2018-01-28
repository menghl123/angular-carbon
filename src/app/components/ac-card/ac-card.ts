import {Component, ContentChild, ElementRef, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';

@Component({
  selector: 'ac-card-body,[ac-card-body]',
  template: '<ng-content></ng-content>'
})
export class AcBodyComponent {

}

@Component({
  selector: 'ac-card-footer,[ac-card-footer]',
  template: '<ng-content></ng-content>'
})
export class AcFooterComponent {

}

@Component({
  selector: 'ac-card-header,[ac-card-header]',
  template: '<ng-content></ng-content>'
})
export class AcHeaderComponent {

}

@Component({
  selector: 'ac-card',
  template: `
    <div class="ac-card">
      <div class="ac-card-header" *ngIf="title || cardHeader">
        <div class="ac-card-title">
          <ng-container *ngIf="title">
            {{title}}
          </ng-container>
          <ng-container *ngIf="!title && cardHeader">
            <ng-content select="ac-card-header"></ng-content>
          </ng-container>
        </div>
      </div>
      <div class="ac-card-content">
        <div class="ac-card-content-inner">
          <ng-content select="ac-card-body"></ng-content>
        </div>
      </div>
      <div class="ac-card-footer" *ngIf="foot || cardHeader">
        <ng-container *ngIf="foot">
          {{foot}}
        </ng-container>
        <ng-container *ngIf="!foot && cardFooter">
          <ng-content select="ac-card-footer"></ng-content>
        </ng-container>
      </div>
    </div>
  `,
})
export class AcCardComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() foot: string;

  @ContentChild(AcFooterComponent) cardFooter;
  @ContentChild(AcHeaderComponent) cardHeader;

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
  declarations: [AcCardComponent, AcFooterComponent, AcHeaderComponent, AcBodyComponent],
  exports: [AcCardComponent, AcFooterComponent, AcHeaderComponent, AcBodyComponent]
})
export class AcCardModule {

}
