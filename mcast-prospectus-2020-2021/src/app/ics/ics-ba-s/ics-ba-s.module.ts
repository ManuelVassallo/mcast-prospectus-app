import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsBaSPageRoutingModule } from './ics-ba-s-routing.module';

import { IcsBaSPage } from './ics-ba-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsBaSPageRoutingModule
  ],
  declarations: [IcsBaSPage]
})
export class IcsBaSPageModule {}
