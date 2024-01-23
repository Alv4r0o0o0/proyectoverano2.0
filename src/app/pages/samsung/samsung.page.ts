import { Component, OnInit } from '@angular/core';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.page.html',
  styleUrls: ['./samsung.page.scss'],
})
export class SamsungPage implements OnInit {
  productos: any[] = [];

  constructor(private bd: BdregistroService) { }

  ngOnInit() {
    this.bd.fetchProductos().subscribe(productos => {
      this.productos = productos.filter(producto => producto.fk_id_categoria === 2);
    });
  }

}
