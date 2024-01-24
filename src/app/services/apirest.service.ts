import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  apiURL = "https://mindicador.cl/api/{dolar}";


  constructor(private http:HttpClient) { }


  obtenerValores(): Observable<any>{
    return this.http.get(this.apiURL + 'dolar').pipe(
      retry(3)
    );
  }

  
}
