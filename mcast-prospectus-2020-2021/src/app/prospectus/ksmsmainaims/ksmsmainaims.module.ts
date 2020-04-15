import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KsmsmainaimsPageRoutingModule } from './ksmsmainaims-routing.module';

import { KsmsmainaimsPage } from './ksmsmainaims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KsmsmainaimsPageRoutingModule
  ],
  declarations: [KsmsmainaimsPage]
})
export class KsmsmainaimsPageModule {}
