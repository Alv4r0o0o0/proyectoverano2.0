import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-iphone1',
  templateUrl: './iphone1.page.html',
  styleUrls: ['./iphone1.page.scss'],
})
export class Iphone1Page implements OnInit {
  showFullContent: boolean = false;
  producto: any;
  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor(private route: ActivatedRoute, private bd: BdregistroService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['state']) {
        const idProducto = params['state'].idProducto;
        this.cargarDetalleProducto(idProducto);
      }
    });
  }

  cargarDetalleProducto(idProducto: number) {
    // Usa tu servicio para obtener los detalles del producto por su ID
    this.bd.obtenerDetalleProducto(idProducto).subscribe(producto => {
      this.producto = producto;
    });
  }

}
