import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcListModule} from './ac-list/ac-list';
import {AcBadgeModule} from './ac-badge/ac-badge';
import {AcButtonModule} from './ac-button/ac-button';
import {AcFloatButtonModule} from './ac-float-button/ac-float-button';
import {AcCircularModule} from './ac-circular/ac-circular';
import {AcFreshModule} from './ac-refresh/ac-fresh';
import {AcHeaderBarModule} from './ac-header-bar/ac-header-bar';
import {AcTabModule} from './ac-tab/ac-tab';
import {AcSearchModule} from './ac-search/ac-search';
import {AcBottomNavModule} from './ac-bottom-nav/ac-bottom-nav';
import {AcSnackBarModule, AcSnackBarService} from './ac-snack-bar/ac-snack-bar';
import {AngularCarbonConfig} from './angular-carbon-config';
import {AcModalModule} from './ac-modal/modal.module';
import {AcModalService} from './ac-modal/modal.service';
import {AcOverlayModule} from './ac-overlay/overlay.module';
import {AcOverlayService} from './ac-overlay/overlay.service';
import {AcCardModule} from './ac-card/ac-card';
import {AcSwitchModule} from './ac-switch/ac-switch';
import {AcRangeModule} from './ac-range/ac-range';
import {AcCheckboxModule} from './ac-checkbox/ac-checkbox';
import {AcRadioModule} from './ac-radio/ac-radio';
import {AcSelectModule} from './ac-select/ac-select';
import {AcToastModule, AcToastService} from './ac-toast/ac-toast';


@NgModule({
  imports: [
    CommonModule,
    AcListModule,
    AcBadgeModule,
    AcButtonModule,
    AcFloatButtonModule,
    AcCircularModule,
    AcFreshModule,
    AcHeaderBarModule,
    AcTabModule,
    AcSearchModule,
    AcBottomNavModule,
    AcSnackBarModule,
    AcModalModule,
    AcOverlayModule,
    AcCardModule,
    AcSwitchModule,
    AcRangeModule,
    AcCheckboxModule,
    AcRadioModule,
    AcSelectModule,
    AcToastModule
  ],
  exports: [
    AcListModule,
    AcBadgeModule,
    AcButtonModule,
    AcFloatButtonModule,
    AcCircularModule,
    AcFreshModule,
    AcHeaderBarModule,
    AcTabModule,
    AcSearchModule,
    AcBottomNavModule,
    AcSnackBarModule,
    AcModalModule,
    AcOverlayModule,
    AcCardModule,
    AcSwitchModule,
    AcRangeModule,
    AcCheckboxModule,
    AcRadioModule,
    AcSelectModule,
    AcToastModule
  ],
  declarations: []
})
export class AngularCarbonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularCarbonModule,
      providers: [
        { provide: AngularCarbonConfig, useClass: AngularCarbonConfig },
        { provide: AcModalService, useClass: AcModalService },
        { provide: AcOverlayService, useClass: AcOverlayService },
        { provide: AcSnackBarService, useClass: AcSnackBarService },
        { provide: AcToastService, useClass: AcToastService },
      ]
    };
  }
}

