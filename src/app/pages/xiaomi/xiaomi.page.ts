import { Component, OnInit } from '@angular/core';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-xiaomi',
  templateUrl: './xiaomi.page.html',
  styleUrls: ['./xiaomi.page.scss'],
})
export class XiaomiPage implements OnInit {

  constructor(private bd:BdregistroService) { }
  productos: any[] = [];

  ngOnInit() {
    this.bd.fetchProductos().subscribe(productos => {
      this.productos = productos.filter(producto => producto.fk_id_categoria === 3);
    });
  }
  

}
