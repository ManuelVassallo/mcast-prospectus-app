import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectusHeaderComponent } from 'src/app/prospectus/prospectus-header/prospectus-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ProspectusHeaderComponent
  ],
  entryComponents:[
    ProspectusHeaderComponent
  ],
  exports:[
    ProspectusHeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SharedComponentsModule { }
