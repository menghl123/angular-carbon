import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayComponent } from './overlay.component';
import { OverlayContentComponent } from './overlay-content.component';
import {AcModalModule} from '../ac-modal/modal.module';

@NgModule({
  imports: [CommonModule, AcModalModule],
  exports: [OverlayComponent],
  declarations: [OverlayComponent, OverlayContentComponent],
  providers: [],
  entryComponents: [OverlayComponent]
})
export class AcOverlayModule {
}
