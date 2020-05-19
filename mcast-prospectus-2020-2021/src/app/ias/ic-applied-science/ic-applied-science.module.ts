import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcAppliedSciencePageRoutingModule } from './ic-applied-science-routing.module';

import { IcAppliedSciencePage } from './ic-applied-science.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcAppliedSciencePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcAppliedSciencePage]
})
export class IcAppliedSciencePageModule {}
