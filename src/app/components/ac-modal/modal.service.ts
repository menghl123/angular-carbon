import {ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {AcModalComponent} from './modal.component';
import {ModalOptions} from './modal-options.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {_throw} from 'rxjs/observable/throw';
import {Observable} from 'rxjs/Observable';
import {AngularCarbonConfig} from '../angular-carbon-config';

@Injectable()
export class AcModalService {

  private instances = [];

  constructor(private angularCarbonConfig: AngularCarbonConfig, private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }


  open<T>(options: ModalOptions): Observable<T> {
    const rootContainer = options.rootContainer || this.angularCarbonConfig.rootContainer;
    if (!rootContainer) {
      throw new Error('Should setup ViewContainerRef on modal options or rebirth config service!');
    }
    if (options.animation === undefined || options.animation === null) {
      options.animation = true;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AcModalComponent);
    const injector = options.injector || this.injector;
    const modalRef = <ComponentRef<AcModalComponent>>rootContainer
      .createComponent(componentFactory, rootContainer.length, injector);
    this.instances.push(modalRef);
    const instance: AcModalComponent = modalRef.instance;
    const dismissResult = instance.addContent(options, this.instances.length)
      .do(() => this.close(modalRef))
      .catch(error => {
        this.close(modalRef);
        return _throw(error);
      });
    instance.open();
    return dismissResult;
  }

  closeAll(): void {
    this.instances.forEach(modalRef => this.close(modalRef));
  }

  private close(modalRef: ComponentRef<AcModalComponent>): void {
    this.instances.splice(this.instances.indexOf(modalRef), 1);
    const subscriber = modalRef.instance.close()
      .subscribe(_ => {
        subscriber.unsubscribe();
        if (!this.instances.length) {
          modalRef.instance.cleanup();
        }
        modalRef.destroy();
      });
  }
}
