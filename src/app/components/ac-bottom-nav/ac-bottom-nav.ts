import {Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';
import {AcMenuItem} from '../ac-model/model';

@Component({
  selector: 'ac-bottom-nav',
  template: `
    <div class="ac-bottom-nav">
      <ng-container *ngFor="let item of navs">
        <a (click)="onClick(item)" href="javascript:;" class="ac-bottom-nav-item"
           [ngClass]="{'active':item === nav || item?.index === index}">
          <i class="icon {{item?.icon}}" style="font-size: 24px;"></i>
          <div class="ac-bottom-nav-item-text">{{item?.title}}</div>
          <div class="ac-ripple-ink"></div>
        </a>
      </ng-container>
    </div>
  `,
})
export class AcBottomNavComponent implements OnInit {
  @Input() navs: AcMenuItem[];
  @Input() nav: AcMenuItem;
  index: any = 0;
  @Output() navChange: EventEmitter<any> = new EventEmitter();


  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
    this.nav = this.navs[0];
  }

  onClick(item) {
    this.nav = item;
    this.index = this.navs.indexOf(this.nav);
    this.navChange.emit(this.nav);
  }

}


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AcBottomNavComponent],
  exports: [AcBottomNavComponent]
})
export class AcBottomNavModule {

}
