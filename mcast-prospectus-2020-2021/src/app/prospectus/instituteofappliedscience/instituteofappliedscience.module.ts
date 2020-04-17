import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteofappliedsciencePageRoutingModule } from './instituteofappliedscience-routing.module';

import { InstituteofappliedsciencePage } from './instituteofappliedscience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteofappliedsciencePageRoutingModule
  ],
  declarations: [InstituteofappliedsciencePage]
})
export class InstituteofappliedsciencePageModule {}
