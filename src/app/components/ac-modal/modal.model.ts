import { EventEmitter } from '@angular/core';

export interface AcModal {
  context: any;
  dismiss: EventEmitter<any>;
}
