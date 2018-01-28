import {ElementRef} from '@angular/core';

export const removeNgTag = (nativeElement: HTMLElement): void => {
  const parentElement = nativeElement.parentElement;
  if (!parentElement || !parentElement.insertBefore) {
    return;
  }
  while (nativeElement.firstChild) {
    parentElement.insertBefore(nativeElement.firstChild, nativeElement);
  }
  parentElement.removeChild(nativeElement);
};
export function centerWindowPosition(elementRef: ElementRef, window: any): { top?: number, left?: number } {
  if (!elementRef.nativeElement || !elementRef.nativeElement.getBoundingClientRect) {
    return {};
  }

  const rect = elementRef.nativeElement.getBoundingClientRect();
  const elmHeight = rect.height;
  const elmWidth = rect.width;
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;

  return {
    left: ( winWidth - elmWidth) / 2,
    top: ( winHeight - elmHeight) / 2
  };
}
