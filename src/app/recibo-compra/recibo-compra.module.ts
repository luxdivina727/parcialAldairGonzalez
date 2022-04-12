import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciboCompraPageRoutingModule } from './recibo-compra-routing.module';

import { ReciboCompraPage } from './recibo-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciboCompraPageRoutingModule
  ],
  declarations: [ReciboCompraPage]
})
export class ReciboCompraPageModule {}
