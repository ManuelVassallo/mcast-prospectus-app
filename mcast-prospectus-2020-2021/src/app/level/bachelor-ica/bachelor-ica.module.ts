import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIcaPageRoutingModule } from './bachelor-ica-routing.module';

import { BachelorIcaPage } from './bachelor-ica.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIcaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorIcaPage]
})
export class BachelorIcaPageModule {}
