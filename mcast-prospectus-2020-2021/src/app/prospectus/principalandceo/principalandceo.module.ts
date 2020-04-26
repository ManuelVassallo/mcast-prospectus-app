import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalandceoPageRoutingModule } from './principalandceo-routing.module';

import { PrincipalandceoPage } from './principalandceo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalandceoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PrincipalandceoPage]
})
export class PrincipalandceoPageModule {}
