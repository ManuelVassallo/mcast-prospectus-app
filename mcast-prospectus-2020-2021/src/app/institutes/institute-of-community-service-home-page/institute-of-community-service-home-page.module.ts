import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteOfCommunityServiceHomePagePageRoutingModule } from './institute-of-community-service-home-page-routing.module';

import { InstituteOfCommunityServiceHomePagePage } from './institute-of-community-service-home-page.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteOfCommunityServiceHomePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteOfCommunityServiceHomePagePage]
})
export class InstituteOfCommunityServiceHomePagePageModule {}
