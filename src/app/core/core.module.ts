import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularCarbonModule} from '../components/angular-carbon.module';

@NgModule({
  imports: [
    CommonModule,
    AngularCarbonModule.forRoot()
  ],
  declarations: []
})
export class CoreModule { }
