import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaAdFrPageRoutingModule } from './ica-ad-fr-routing.module';

import { IcaAdFrPage } from './ica-ad-fr.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaAdFrPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaAdFrPage]
})
export class IcaAdFrPageModule {}
