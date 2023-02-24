import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JostPage } from './jost.page';

const routes: Routes = [
  {
    path: '',
    component: JostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JostPageRoutingModule {}
