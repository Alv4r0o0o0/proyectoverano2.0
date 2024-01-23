import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-xiaomi',
  templateUrl: 'xiaomi.page.html',
  styleUrls: ['xiaomi.page.scss'],
})
export class XiaomiPage {
  carrito: any[] = [];
  totalCarrito: number = 0;
  productos: any[] = [];

  constructor(private bd:BdregistroService, private router:Router) { }
  

  ngOnInit() {
    this.bd.fetchProductos().subscribe(productos => {
      this.productos = productos.filter(producto => producto.fk_id_categoria === 3);
    });
  }

  verDetalleProducto(idProducto: number) {
    // Navegar a la página de detalles del producto con el id_producto
    this.router.navigate(['/iphone1', idProducto]);
  }
  

}
