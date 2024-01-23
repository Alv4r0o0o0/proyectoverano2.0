import { Component, OnInit } from '@angular/core';
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

  constructor(private bd:BdregistroService) { }
  

  ngOnInit() {
    this.bd.fetchProductos().subscribe(productos => {
      this.productos = productos.filter(producto => producto.fk_id_categoria === 3);
    });
  }
  


  agregarAlCarrito(nombre: string, imagen: string, precio: number) {
    this.carrito.push({ nombre, imagen, precio });
    this.totalCarrito += precio;
  }
}
