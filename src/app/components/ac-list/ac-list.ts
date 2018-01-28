import {Component, ElementRef, Input, NgModule, OnInit} from '@angular/core';
import {removeNgTag} from '../utils/domUtils';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'ac-item-divider',
  template: `
    <div class="ac-item-divider">
      <ng-content></ng-content>
    </div>
  `,
})
export class AcItemDividerComponent implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

}

@Component({
  selector: 'ac-item',
  template: `
    <a *ngIf="url" class="ac-item ac-item-cell {{animation ? 'ac-item-link ac-item-ripple' : ''}}" [routerLink]="[url]">
      <div *ngIf="logo" class="ac-item-media"><i class="logo">{{logo}}</i></div>
      <div *ngIf="title" class="ac-item-title"> {{title}}</div>
      <div *ngIf="after" class="ac-item-title-after"> {{after}}</div>
    </a>
    <a *ngIf="!url" class="ac-item ac-item-cell {{animation ? 'ac-item-link ac-item-ripple' : ''}}" href="javascript:;">
      <div *ngIf="logo" class="ac-item-media"><i class="logo">{{logo}}</i></div>
      <div *ngIf="title" class="ac-item-title"> {{title}}</div>
      <div *ngIf="after" class="ac-item-title-after"> {{after}}</div>
      <div class="ac-ripple-ink"></div>
    </a>
  `,
})
export class AcItemComponent implements OnInit {
  @Input() url: string;
  @Input() title: string;
  @Input() logo: string;
  @Input() after: string;
  @Input() animation: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

}

@Component({
  selector: 'ac-list',
  template: `
    <div class="ac-list">
      <ng-content></ng-content>
    </div>
  `,
})
export class AcListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AcItemComponent, AcListComponent, AcItemDividerComponent],
  exports: [AcItemComponent, AcListComponent, AcItemDividerComponent]
})
export class AcListModule {

}
