import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelInfoPageRoutingModule } from './level-info-routing.module';

import { LevelInfoPage } from './level-info.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelInfoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [LevelInfoPage]
})
export class LevelInfoPageModule {}
