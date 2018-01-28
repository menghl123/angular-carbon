import {Component, ElementRef, Injectable, NgModule, OnInit} from '@angular/core';
import {removeNgTag} from '../utils/domUtils';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AcOverlayService} from '../ac-overlay/overlay.service';

export interface AcToastOption {
  message?: string;
  icon?: string;
  time?: number;
  position?: 'bottom' | 'center';
}

@Injectable()
export class AcToastService {
  constructor(private overlayService: AcOverlayService) {
  }

  open(option: AcToastOption) {
    const positionClass = option.position === 'center' ? 'ac-toast-center' : '';
    const iconHtml = option.icon ? `<i class="icon ${option.icon}" style="font-size: 36px;"></i>` : '';
    this.overlayService.open({
      html: `
      <div class="ac-toast ac-toast-transition ${positionClass}" style="z-index: 20141232;">
      ${iconHtml}
      <div class="ac-toast-text">${option.message}</div>
    </div>
      `
    });
    if (option.time) {
      this.close(option.time);
    }
  }

  close(time: number) {
    setTimeout(() => this.overlayService.close(), time);
  }

}

@Component({
  selector: 'ac-toast',
  template: `
    <div class="ac-toast ac-toast-transition" style="z-index: 20141232;">
      <div class="ac-toast-text">默认toast</div>
    </div>
  `,
})
export class AcToastComponent implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
  }

}

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AcToastComponent],
  exports: [AcToastComponent]
})
export class AcToastModule {

}
