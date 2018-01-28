import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AcListDemoComponent} from './demo/ac-list-demo/ac-list-demo.component';
import {AcFloatButtonDemoComponent} from './demo/ac-float-button/ac-float-button.component';
import {AcCircularDemoComponent} from './demo/ac-circular-demo/ac-circular-demo.component';
import {AcFreshDemoComponent} from './demo/ac-fresh-demo/ac-fresh-demo.component';
import {AcHeaderBarDemoComponent} from './demo/ac-header-bar-demo/ac-header-bar-demo.component';
import {AcTabDemoComponent} from './demo/ac-tab-demo/ac-tab-demo.component';
import {IndexComponent} from './demo/index/index.component';
import {AcSearchDemoComponent} from './demo/ac-search-demo/ac-search-demo.component';
import {AcBottomNavDemoComponent} from './demo/ac-bottom-nav-demo/ac-bottom-nav-demo.component';
import {AcSnackBarDemoComponent} from './demo/ac-snack-bar-demo/ac-snack-bar-demo.component';
import {AcCardDemoComponent} from './demo/ac-card-demo/ac-card-demo.component';
import {AcSwitchDemoComponent} from './demo/ac-switch-demo/ac-switch-demo.component';
import {AcRangeDemoComponent} from './demo/ac-range-demo/ac-range-demo.component';
import {AcCheckboxDemoComponent} from './demo/ac-checkbox-demo/ac-checkbox-demo.component';
import {AcRadioDemoComponent} from './demo/ac-radio-demo/ac-radio-demo.component';
import {AcSelectDemoComponent} from './demo/ac-select-demo/ac-select-demo.component';
import {AcToastDemoComponent} from './demo/ac-toast-demo/ac-toast-demo.component';
import {AcModalDemoComponent} from './demo/ac-modal-demo/ac-modal-demo.component';
import {AcPopupDemoComponent} from './demo/ac-popup-demo/ac-popup-demo.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: AppComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'index'},
    {path: 'index', component: IndexComponent},
    {path: 'ac-list', component: AcListDemoComponent},
    {path: 'ac-float-button', component: AcFloatButtonDemoComponent},
    {path: 'ac-circular', component: AcCircularDemoComponent},
    {path: 'ac-fresh', component: AcFreshDemoComponent},
    {path: 'ac-header-bar', component: AcHeaderBarDemoComponent},
    {path: 'ac-tab', component: AcTabDemoComponent},
    {path: 'ac-search', component: AcSearchDemoComponent},
    {path: 'ac-bottom-nav', component: AcBottomNavDemoComponent},
    {path: 'ac-snack-bar', component: AcSnackBarDemoComponent},
    {path: 'ac-card', component: AcCardDemoComponent},
    {path: 'ac-switch', component: AcSwitchDemoComponent},
    {path: 'ac-range', component: AcRangeDemoComponent},
    {path: 'ac-checkbox', component: AcCheckboxDemoComponent},
    {path: 'ac-radio', component: AcRadioDemoComponent},
    {path: 'ac-select', component: AcSelectDemoComponent},
    {path: 'ac-toast', component: AcToastDemoComponent},
    {path: 'ac-modal', component: AcModalDemoComponent},
    {path: 'ac-popup', component: AcPopupDemoComponent},
  ]
  }
]
