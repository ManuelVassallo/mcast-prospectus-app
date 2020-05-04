import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoEngineeringPageRoutingModule } from './institute-info-engineering-routing.module';

import { InstituteInfoEngineeringPage } from './institute-info-engineering.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoEngineeringPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteInfoEngineeringPage]
})
export class InstituteInfoEngineeringPageModule {}
