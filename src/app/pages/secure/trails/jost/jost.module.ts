import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JostPageRoutingModule } from './jost-routing.module';

import { JostPage } from './jost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JostPageRoutingModule
  ],
  declarations: [JostPage]
})
export class JostPageModule {}
