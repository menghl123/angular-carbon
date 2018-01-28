import {Component, ComponentFactoryResolver, EventEmitter, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';
import {AcModalService} from '../../components/ac-modal/modal.service';
import {AcModal} from '../../components/ac-modal/modal.model';

@Component({
  selector: 'app-ac-popup-demo',
  templateUrl: './ac-popup-demo.component.html',
  styleUrls: ['./ac-popup-demo.component.scss'],
  animations: [flyIn]
})
export class AcPopupDemoComponent implements OnInit {
  constructor(private router: Router,
              private modalService: AcModalService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

  topPopup() {
    this.modalService.open<string>({
      component: PopupTestComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: 'inner modal'
      },
      size: 'sm',
      modal: false,
    })
      .subscribe(data => {
        console.log('Rebirth AcModal -> Get ok with result:', data);
      }, error => {
        console.error('Rebirth AcModal -> Get cancel with result:', error);
      });
  }

}

@Component({
  selector: 'ac-modal-test',
  template: `
    <div class="ac-popup demo-popup-left ac-popup-left popup-slide-left-transition" style="z-index: 20141266;">
      <div class="ac-button-area"><a (click)="cancel()"  href="javascript:;" class="ac-button ac-button-fill ac-button-raised color-red">
        <span class="ac-button-text" (click)="cancel()">关闭弹框</span>
        <div class="ac-ripple-ink"></div>
      </a></div>
    </div>
  `
})
export class PopupTestComponent implements AcModal, OnInit {

  context: { text: string };
  dismiss: EventEmitter<string>;

  constructor(private modalService: AcModalService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    console.log('ModalTestComponent init....');
  }

  cancel() {
    this.dismiss.error(1);
  }

}
