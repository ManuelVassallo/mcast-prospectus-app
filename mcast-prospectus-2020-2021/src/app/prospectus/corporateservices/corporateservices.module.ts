import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporateservicesPageRoutingModule } from './corporateservices-routing.module';

import { CorporateservicesPage } from './corporateservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorporateservicesPageRoutingModule
  ],
  declarations: [CorporateservicesPage]
})
export class CorporateservicesPageModule {}
