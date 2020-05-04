import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoBusinessPageRoutingModule } from './institute-info-business-routing.module';

import { InstituteInfoBusinessPage } from './institute-info-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteInfoBusinessPage]
})
export class InstituteInfoBusinessPageModule {}
