import { NgModule } from '@angular/core';

import { AcModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { AcModalContentComponent } from './modal-content.component';
import { AcModalBackdropComponent } from './modal-backdrop.component';
import { AcModalWindowComponent } from './modal-window.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AcModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AcModalBackdropComponent],
  declarations: [
    AcModalComponent,
    AcModalContentComponent,
    AcModalBackdropComponent,
    AcModalWindowComponent
  ],
  entryComponents: [
    AcModalContentComponent,
    AcModalComponent,
    AcModalBackdropComponent
  ]
})
export class AcModalModule {
  constructor(router: Router, modalService: AcModalService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        modalService.closeAll();
      }
    });
  }
}
