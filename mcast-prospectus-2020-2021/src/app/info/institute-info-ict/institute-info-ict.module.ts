import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoIctPageRoutingModule } from './institute-info-ict-routing.module';

import { InstituteInfoIctPage } from './institute-info-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteInfoIctPage]
})
export class InstituteInfoIctPageModule {}
