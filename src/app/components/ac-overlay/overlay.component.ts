import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';
import {OverlayOptions} from './overlay-options.model';
import {OverlayContentComponent} from './overlay-content.component';
import {centerWindowPosition} from '../utils/domUtils';

@Component({
  selector: 're-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  @Input() overlayOptions: OverlayOptions;
  @ViewChild('overlayBody') overlayBody: ElementRef;
  @ViewChild(OverlayContentComponent) overlayContent: OverlayContentComponent;

  constructor(private renderer: Renderer2) {

  }


  addContent(options: OverlayOptions) {
    this.overlayOptions = options;
    if (!this.overlayOptions.html && this.overlayOptions.component) {
      this.overlayContent.addContent(this.overlayOptions);
    }
    this.adjustOverlayPosition();
  }

  @HostListener('window:resize', [])
  onWinResize() {
    this.adjustOverlayPosition();
  }

  private adjustOverlayPosition() {
    setTimeout(() => {
      const pos = centerWindowPosition(this.overlayBody, window);
      this.renderer.setStyle(this.overlayBody.nativeElement, 'top', `${pos.top}px`);
      this.renderer.setStyle(this.overlayBody.nativeElement, 'left', `${pos.left}px`);
    }, 0);
  }
}
