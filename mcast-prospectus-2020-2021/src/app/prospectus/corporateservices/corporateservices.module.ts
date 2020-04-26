import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporateservicesPageRoutingModule } from './corporateservices-routing.module';

import { CorporateservicesPage } from './corporateservices.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorporateservicesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CorporateservicesPage]
})
export class CorporateservicesPageModule {}
