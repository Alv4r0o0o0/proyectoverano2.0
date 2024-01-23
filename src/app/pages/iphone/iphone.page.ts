import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.page.html',
  styleUrls: ['./iphone.page.scss'],
})
export class IphonePage implements OnInit {
  productos: any[] = [];

  constructor(private bd: BdregistroService, private router: Router) { }

  ngOnInit() {
    this.bd.fetchProductos().subscribe(productos => {
      this.productos = productos.filter(producto => producto.fk_id_categoria === 1);
    });
  }
  verDetalleProducto(idProducto: number) {
    // Navegar a la página de detalles del producto con el id_producto
    this.router.navigate(['/iphone1', idProducto]);
  }
  
}
