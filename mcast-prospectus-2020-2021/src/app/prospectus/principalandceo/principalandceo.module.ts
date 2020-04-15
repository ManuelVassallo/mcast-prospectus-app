import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalandceoPageRoutingModule } from './principalandceo-routing.module';

import { PrincipalandceoPage } from './principalandceo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalandceoPageRoutingModule
  ],
  declarations: [PrincipalandceoPage]
})
export class PrincipalandceoPageModule {}
