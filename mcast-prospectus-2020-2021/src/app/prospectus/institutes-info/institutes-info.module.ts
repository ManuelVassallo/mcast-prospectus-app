import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutesInfoPageRoutingModule } from './institutes-info-routing.module';

import { InstitutesInfoPage } from './institutes-info.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutesInfoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstitutesInfoPage]
})
export class InstitutesInfoPageModule {}
