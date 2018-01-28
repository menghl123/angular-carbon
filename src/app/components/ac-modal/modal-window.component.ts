import {
  Component,
  Input,
  ViewChild,
  HostListener,
  EventEmitter,
  ElementRef,
  Output
} from '@angular/core';
import { AcModalContentComponent } from './modal-content.component';
import { ModalOptions } from './modal-options.model';
import { ModalDismissReasons } from './modal-dismiss-reasons.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ac-modal-window',
  templateUrl: './modal-window.component.html',
  host: {
    '[@flyInOut]': 'animateState',
    '(@flyInOut.done)': 'onAnimationDone($event)'
  },
  animations: [
    trigger('flyInOut', [
      state('void', style({ top: '-100%', opacity: 0 })),
      state('in', style({ top: '10%', opacity: 1 })),
      transition('void => in', animate('0.2s ease-in-out')),
      transition('in => void', animate('0.2s ease-in-out')),
    ])
  ]
})
export class AcModalWindowComponent {
  @Input() isOpen = false;
  @Input() instanceCount = 0;
  @Output() animationDone = new EventEmitter<any>();
  @ViewChild(AcModalContentComponent) modalContent: AcModalContentComponent;
  dismiss: EventEmitter<any>;
  modalOptions: ModalOptions;
  animateState: string;

  constructor(private elementRef: ElementRef) {

  }

  open() {
    this.isOpen = true;
    if (this.modalOptions.animation) {
      this.animateState = 'in';
    }
  }

  close() {
    this.isOpen = false;
    if (this.modalOptions.animation) {
      this.animateState = 'void';
      return this.animationDone;
    }

    setTimeout(() => this.onAnimationDone(null));
    return this.animationDone;
  }


  onAnimationDone($event) {
    this.animationDone.emit($event);
  }

  @HostListener('click', ['$event'])
  onBackdropClick($event: Event) {
    if (!this.modalOptions.modal && this.elementRef.nativeElement === $event.target) {
      this.dismiss.error(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  @HostListener('keyup.esc', ['$event'])
  onEscKeyUp($event: KeyboardEvent) {
    if (this.modalOptions.keyboard !== false) {
      this.dismiss.error(ModalDismissReasons.ESC_KEY);
    }
  }

  addContent<T>(options: ModalOptions, dismiss: EventEmitter<T>): EventEmitter<T> {
    this.modalOptions = options;
    this.dismiss = dismiss;
    this.modalContent.addContent(options, this.dismiss);
    return this.dismiss;
  }
}
