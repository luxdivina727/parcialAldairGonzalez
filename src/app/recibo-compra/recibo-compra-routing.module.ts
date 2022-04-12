import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciboCompraPage } from './recibo-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ReciboCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciboCompraPageRoutingModule {}
