import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoIcaPageRoutingModule } from './institute-info-ica-routing.module';

import { InstituteInfoIcaPage } from './institute-info-ica.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoIcaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteInfoIcaPage]
})
export class InstituteInfoIcaPageModule {}
