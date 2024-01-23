import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-iphone1',
  templateUrl: './iphone1.page.html',
  styleUrls: ['./iphone1.page.scss'],
})
export class Iphone1Page implements OnInit {
  showFullContent: boolean = false;
  producto: any;
  idProducto: any;
  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor(private route: ActivatedRoute, private bd: BdregistroService, private alertController: AlertController) { }
 

  ngOnInit() {
    const idProductoParam = this.route.snapshot.paramMap.get('idProducto');

  if (idProductoParam !== null && idProductoParam !== undefined) {
    // Convertir a número solo si no es null o undefined
    this.idProducto = +idProductoParam;

    // Obtener la información del producto utilizando el servicio
    this.bd.fetchProductos().subscribe(productos => {
      this.producto = productos.find(producto => producto.id_producto === this.idProducto);
    });
  } else {
    // Manejar el caso en que idProducto sea null o undefined
    console.error("idProducto es null o undefined");
  }

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Gracias por su compra',
      subHeader: '',
      message: 'Que tenga un lindo dia ',
      buttons: ['Salir'],
    });

    await alert.present();
  }
}


