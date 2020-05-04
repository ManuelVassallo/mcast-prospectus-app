import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoIcsPageRoutingModule } from './institute-info-ics-routing.module';

import { InstituteInfoIcsPage } from './institute-info-ics.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoIcsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteInfoIcsPage]
})
export class InstituteInfoIcsPageModule {}
