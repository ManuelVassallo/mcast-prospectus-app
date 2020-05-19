import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAppliedSciencePageRoutingModule } from './d-applied-science-routing.module';

import { DAppliedSciencePage } from './d-applied-science.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAppliedSciencePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DAppliedSciencePage]
})
export class DAppliedSciencePageModule {}
