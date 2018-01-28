import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ModalOptions} from './modal-options.model';

@Component({
  selector: 'ac-modal-backdrop',
  /* tslint:disable */
  template: `
    <div class="ac-overlay ac-overlay-fade-transition"
         style="opacity: 0.4; background-color: rgb(0, 0, 0); z-index: 20141236; position: fixed;">
    </div>`,
  /* tslint:enable */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcModalBackdropComponent {
  @Input() isOpen: boolean;
  @Input() modalOptions: ModalOptions;
  @Input() instanceCount = 0;
}
