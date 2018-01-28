import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcOverlayService} from '../ac-overlay/overlay.service';
import {OverlayOptions} from '../ac-overlay/overlay-options.model';

@Injectable()
export class AcSnackBarService {
  constructor(private overlayService: AcOverlayService) {
  }

  open(options: OverlayOptions) {
    if (options.html) {
      this.overlayService.open({
        html: `
    <div class="ac-snack-bar ac-snack-transition">
      <div class="ac-snack-message">
        ${options.html}
      </div>
    </div>
    `
      });
      return;
    }
    if (options.component) {
      this.overlayService.open({component: options.component});
    }
  }

  close(time: number) {
    setTimeout(() => this.overlayService.close(), time);
  }

}

@Component({
  selector: 'ac-snack-bar',
  template: `
    <div class="ac-snack-bar ac-snack-transition">
      <ng-content></ng-content>
    </div>
  `,
})
export class AcSnackBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AcSnackBarComponent],
  exports: [AcSnackBarComponent],
  entryComponents: [AcSnackBarComponent]
})
export class AcSnackBarModule {

}
