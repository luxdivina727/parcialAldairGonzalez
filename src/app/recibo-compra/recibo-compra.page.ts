import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibo-compra',
  templateUrl: './recibo-compra.page.html',
  styleUrls: ['./recibo-compra.page.scss'],
})
export class ReciboCompraPage implements OnInit {
nombre:any;
valor:any;
  constructor(
    private activedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.nombre=this.activedRouter.snapshot.paramMap.get("nombre");
    this.valor=this.activedRouter.snapshot.paramMap.get("valor");
  }

}
