import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisdestacadasPageRoutingModule } from './misdestacadas-routing.module';

import { MisdestacadasPage } from './misdestacadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisdestacadasPageRoutingModule
  ],
  declarations: [MisdestacadasPage]
})
export class MisdestacadasPageModule {}
