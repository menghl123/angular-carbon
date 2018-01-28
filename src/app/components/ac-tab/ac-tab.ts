import {Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';
import {isArray} from 'util';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AcMenuItem} from '../ac-model/model';

@Component({
  selector: 'ac-tab',
  template: `
    <div class="ac-tab-bar">
      <ng-container *ngFor="let tab of tabs,let i =index">
        <a (click)="tabClick($event,tab,i)" href="javascript:;" class="ac-tab-link"> {{tab?.title}}
          <div class="ac-ripple-ink"></div>
        </a>
      </ng-container>
      <span [style]="makeStyle()" class="ac-tab-link-highlight"></span>
    </div>
  `,
})
export class AcTabComponent implements OnInit {
  @Input() tabs: any[];
  tab: AcMenuItem;
  index: any = 0;
  @Output()tabChange: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
    if (!this.tabs || !isArray(this.tabs) || this.tabs.length === 0) {
      throw new Error('ac-tabs init failed');
    }
    this.tab = this.tabs[0];
  }

  tabClick($event, tab, index) {
    $event.stopPropagation();
    $event.preventDefault();
    if (this.tab !== tab) {
      this.tabChange.emit(tab);
    }
    this.tab = tab;
    this.index = index;
  }

  makeStyle(): SafeStyle {
    const style = `width: ${100 / this.tabs.length}%; transform: translate3d(${this.index * 100}%, 0px, 0px);`;
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

}


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AcTabComponent],
  exports: [AcTabComponent]
})
export class AcTabModule {

}
