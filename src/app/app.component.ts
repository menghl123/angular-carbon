import {Component, ViewContainerRef} from '@angular/core';
import {AngularCarbonConfig} from './components/angular-carbon-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef,
              private angularCarbonConfig: AngularCarbonConfig) {
    this.angularCarbonConfig.rootContainer = viewContainerRef;
  }

  title = 'app';
}
