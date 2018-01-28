import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AcListDemoComponent} from './demo/ac-list-demo/ac-list-demo.component';
import {ROUTER_CONFIG} from './app.router';
import {AcFloatButtonDemoComponent} from './demo/ac-float-button/ac-float-button.component';
import {AcCircularDemoComponent} from './demo/ac-circular-demo/ac-circular-demo.component';
import {AcFreshDemoComponent} from './demo/ac-fresh-demo/ac-fresh-demo.component';
import {AcHeaderBarDemoComponent} from './demo/ac-header-bar-demo/ac-header-bar-demo.component';
import {AcTabDemoComponent} from './demo/ac-tab-demo/ac-tab-demo.component';
import {IndexComponent} from './demo/index/index.component';
import {AcSearchDemoComponent} from './demo/ac-search-demo/ac-search-demo.component';
import {FormsModule} from '@angular/forms';
import {AcBottomNavDemoComponent} from './demo/ac-bottom-nav-demo/ac-bottom-nav-demo.component';
import {
  AcSnackBarDemoComponent,
  AcSnackBarDemoTestComponent
} from './demo/ac-snack-bar-demo/ac-snack-bar-demo.component';
import {AcCardDemoComponent} from './demo/ac-card-demo/ac-card-demo.component';
import {AcSwitchDemoComponent} from './demo/ac-switch-demo/ac-switch-demo.component';
import {AcRangeDemoComponent} from './demo/ac-range-demo/ac-range-demo.component';
import {AcCheckboxDemoComponent} from './demo/ac-checkbox-demo/ac-checkbox-demo.component';
import {AcRadioDemoComponent} from './demo/ac-radio-demo/ac-radio-demo.component';
import {AcSelectDemoComponent} from './demo/ac-select-demo/ac-select-demo.component';
import {AcToastDemoComponent} from './demo/ac-toast-demo/ac-toast-demo.component';
import {AcModalDemoComponent, ModalTestComponent} from './demo/ac-modal-demo/ac-modal-demo.component';
import {AcPopupDemoComponent, PopupTestComponent} from './demo/ac-popup-demo/ac-popup-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    AcListDemoComponent,
    AcFloatButtonDemoComponent,
    AcCircularDemoComponent,
    AcFreshDemoComponent,
    AcHeaderBarDemoComponent,
    AcTabDemoComponent,
    IndexComponent,
    AcSearchDemoComponent,
    AcBottomNavDemoComponent,
    AcSnackBarDemoComponent,
    AcSnackBarDemoTestComponent,
    AcCardDemoComponent,
    AcSwitchDemoComponent,
    AcRangeDemoComponent,
    AcCheckboxDemoComponent,
    AcRadioDemoComponent,
    AcSelectDemoComponent,
    AcToastDemoComponent,
    AcModalDemoComponent,
    ModalTestComponent,
    AcPopupDemoComponent,
    PopupTestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    SharedModule,
    CoreModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  entryComponents: [AcSnackBarDemoTestComponent, ModalTestComponent,PopupTestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
