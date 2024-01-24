import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {

  dolar: any;

  constructor(private api: ApirestService) { }

  getValores(){
    this.api.obtenerValores().subscribe(res=>{
      this.dolar = res;
    })
  }


  ngOnInit() {
  }

}
