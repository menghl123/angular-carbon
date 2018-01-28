import {Component, ElementRef, EventEmitter, HostListener, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {removeNgTag} from '../utils/domUtils';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AcCircularModule} from '../ac-circular/ac-circular';


@Component({
  selector: 'ac-fresh',
  template: `
    <div class="ac-refresh-control ac-refresh-control-noshow" [style]="makeContainerStyle()">
      <i *ngIf="status !== 'loading'" class="icon icon-refresh" [style]="makeLoadingStyle()"></i>
      <ac-circular *ngIf="status === 'loading'" size="sm" color="red"></ac-circular>
      <div class="preloader-wrapper active" style="width: 20px; height: 20px; display: none;">
        <div class="spinner active spinner-">
          <div class="circle-clipper left">
            <div class="circle" style="border-width: 2px;"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle" style="border-width: 2px;"></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AcFreshComponent implements OnInit {
  public static MAX_HEIGHT = 62;
  public static INIT_HEIGHT = -68;
  public static LOADING_HEIGHT = 36;

  @Input() type: 'raised' | 'fill' | 'raised-fill';
  @Input() color: 'red' | 'blue' | 'green' | 'amber';
  @Output() freshEvent: EventEmitter<any> = new EventEmitter();

  private x: number;
  private y: number;
  private moved: number;
  private status: 'loading' | 'hidden' | 'visible';
  private loadingTop: number = AcFreshComponent.INIT_HEIGHT;

  constructor(private elementRef: ElementRef,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

  makeContainerStyle(): SafeStyle {
    // if (this.status === 'hidden') {
    //   return this.sanitizer.bypassSecurityTrustStyle('display:hidden');
    // }
    const styles = `opacity: 1;transform: translate3d(0px, ${this.loadingTop}px, 0px);`;
    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }

  makeLoadingStyle(): SafeStyle {
    const styles = `font-size: 24px; display: inline;opacity: 2;transform: rotate(${this.loadingTop * 3}deg);`;
    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }

  @HostListener('document:touchstart', ['$event'])
  onMousedown($event: any) {
    this.x = $event.touches[0].pageX;
    this.y = $event.touches[0].pageY;
    console.log(`mouse down ===> x:${this.x},y:${this.y}`);
  }

  @HostListener('document:touchmove', ['$event'])
  onMousemove($event: any) {
    const x = $event.touches[0].pageX;
    const y = $event.touches[0].pageY;
    this.moved = y - this.y;
    if (this.moved > 40) {
      // this.loadingTop = moved > AcFreshComponent.MAX_HEIGHT ? AcFreshComponent.MAX_HEIGHT : moved;
      this.loadingTop = Math.min(AcFreshComponent.INIT_HEIGHT + this.moved, AcFreshComponent.MAX_HEIGHT);
      console.log(`mouse move ===> x:${x},y:${y}`);
    }
  }

  @HostListener('document:touchend', ['$event'])
  onTouched($event: any) {
    this.x = null;
    this.y = null;
    if (this.moved < 100) {
      this.loadingTop = AcFreshComponent.INIT_HEIGHT;
    } else {
      this.changeToLoading();
    }
  }

  private changeToLoading() {
    this.loadingTop = AcFreshComponent.LOADING_HEIGHT;
    this.status = 'loading';
    this.freshEvent.emit(this.status);
    setTimeout(() => {
      if (this.status === 'loading') {
        this.status = 'hidden'
        this.loadingTop = AcFreshComponent.INIT_HEIGHT;
      }
    }, 5000);
  }

}


@NgModule({
  imports: [
    CommonModule,
    AcCircularModule
  ],
  declarations: [AcFreshComponent],
  exports: [AcFreshComponent]
})
export class AcFreshModule {

}
