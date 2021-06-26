import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisdestacadasPage } from './misdestacadas.page';

const routes: Routes = [
  {
    path: '',
    component: MisdestacadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisdestacadasPageRoutingModule {}
