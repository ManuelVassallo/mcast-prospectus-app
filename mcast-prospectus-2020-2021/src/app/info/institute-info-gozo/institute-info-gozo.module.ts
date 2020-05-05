import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoGozoPageRoutingModule } from './institute-info-gozo-routing.module';

import { InstituteInfoGozoPage } from './institute-info-gozo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoGozoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteInfoGozoPage]
})
export class InstituteInfoGozoPageModule {}
