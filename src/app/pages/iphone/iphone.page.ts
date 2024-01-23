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
  verProducto(idProducto: number) {
    // Puedes redirigir a una página específica para mostrar el producto individual
    let navigationExtras: NavigationExtras = {
      state: {
        idProducto: idProducto
      }
    };
    this.router.navigate(['/iphone1'], navigationExtras);
  }
  
}
