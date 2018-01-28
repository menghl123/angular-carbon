import { Component, Input, ViewChild, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ModalOptions } from './modal-options.model';
import { AcModalWindowComponent } from './modal-window.component';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ac-modal',
  templateUrl: './modal.component.html'
})
export class AcModalComponent {
  static MODEL_OPEN_CSS = 'modal-open';
  @Input() isOpen = false;
  @Output() dismiss = new EventEmitter<any>();
  @Input() modalOptions: ModalOptions;
  @ViewChild(AcModalWindowComponent) modalWindowComponent: AcModalWindowComponent;
  instanceCount = 0;

  constructor(private renderer: Renderer2) {

  }

  open() {
    this.isOpen = true;
    this.modalWindowComponent.open();
    this.toggleBodyClass(true);
  }

  close(): Observable<any> {
    this.modalWindowComponent.close().do(_ => this.isOpen = false);
    return this.modalWindowComponent.close()
      .do(_ => this.isOpen = false);
  }

  cleanup() {
    this.toggleBodyClass(false);
  }

  addContent<T>(options: ModalOptions, instanceCount: number): EventEmitter<T> {
    this.modalOptions = options;
    this.instanceCount = instanceCount;
    this.modalWindowComponent.addContent(options, this.dismiss);
    return this.dismiss;
  }

  private toggleBodyClass(isAdd: boolean): void {
    if (isAdd) {
      this.renderer.addClass(document.body, AcModalComponent.MODEL_OPEN_CSS);
      return;
    }

    this.renderer.removeClass(document.body, AcModalComponent.MODEL_OPEN_CSS);
  }

}
