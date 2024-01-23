import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xiaomi',
  templateUrl: 'xiaomi.page.html',
  styleUrls: ['xiaomi.page.scss'],
})
export class XiaomiPage {
  carrito: any[] = [];
  totalCarrito: number = 0;

  agregarAlCarrito(nombre: string, imagen: string, precio: number) {
    this.carrito.push({ nombre, imagen, precio });
    this.totalCarrito += precio;
  }
}
