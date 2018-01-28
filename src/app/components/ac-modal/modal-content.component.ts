import {
  Component,
  ComponentRef,
  ViewContainerRef,
  Injector,
  OnDestroy,
  EventEmitter,
  ComponentFactoryResolver
} from '@angular/core';
import { ModalOptions } from './modal-options.model';
import { AcModal } from './modal.model';

@Component({
  selector: 'ac-modal-content',
  template: '',
  exportAs: 'modalContent'
})
export class AcModalContentComponent implements OnDestroy {

  modalContentRef: ComponentRef<AcModal>;

  constructor(private modalContentContainer: ViewContainerRef, private  injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  addContent<T>(options: ModalOptions, dismiss: EventEmitter<any>) {
    const componentFactoryResolver = options.componentFactoryResolver || this.componentFactoryResolver;
    const componentFactory = componentFactoryResolver.resolveComponentFactory(options.component);
    this.modalContentRef = this.modalContentContainer
      .createComponent(componentFactory, this.modalContentContainer.length, options.injector || this.injector);
    const instance: AcModal = this.modalContentRef.instance;
    instance.dismiss = dismiss;
    this.handleResolve(options, instance);
  }

  ngOnDestroy(): void {
    this.modalContentRef.destroy();
  }

  private handleResolve(options: ModalOptions, instance: AcModal) {
    const resolve = options.resolve || {};
    if (resolve.then) {
      resolve.then(data => instance.context = data);
    } else if (resolve.subscribe) {
      resolve.subscribe(data => instance.context = data);
    } else {
      instance.context = resolve;
    }
  }
}
