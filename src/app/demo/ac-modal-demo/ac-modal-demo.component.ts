import {Component, ComponentFactoryResolver, EventEmitter, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {Router} from '@angular/router';
import {AcModalService} from '../../components/ac-modal/modal.service';
import {AcModal} from '../../components/ac-modal/modal.model';

@Component({
  selector: 'app-ac-modal-demo',
  templateUrl: './ac-modal-demo.component.html',
  styleUrls: ['./ac-modal-demo.component.scss'],
  animations: [flyIn]
})
export class AcModalDemoComponent implements OnInit {

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver,
              private modalService: AcModalService) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

  openModal() {
    this.modalService.open<string>({
      component: ModalTestComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: {
        text: 'inner modal'
      },
      modal: false,
      size: 'sm'
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
    <div class="ac-modal ac-modal-scale-transition" style="z-index: 20141238;">
      <div class="ac-modal-header">
        <div class="ac-modal-title"> 标题</div>
      </div>
      <div class="ac-modal-body"> 这里是内容区域，点击关闭按钮，或者遮盖层关闭</div>
      <div class="ac-modal-footer">
        <a (click)="cancel()" href="javascript:;" class="ac-button"> <span class="ac-button-text">关闭</span>
          <div class="ac-ripple-ink"></div>
        </a></div>
    </div>
  `
})
export class ModalTestComponent implements AcModal, OnInit {

  context: { text: string };
  dismiss: EventEmitter<string>;

  constructor(private modalService: AcModalService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    console.log('ModalTestComponent init....');
  }

  cancel() {
    this.dismiss.error();
  }

}
