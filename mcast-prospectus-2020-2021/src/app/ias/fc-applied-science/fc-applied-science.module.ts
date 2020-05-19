import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcAppliedSciencePageRoutingModule } from './fc-applied-science-routing.module';

import { FcAppliedSciencePage } from './fc-applied-science.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcAppliedSciencePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FcAppliedSciencePage]
})
export class FcAppliedSciencePageModule {}
