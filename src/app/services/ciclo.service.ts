import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ciclo } from '../models/ciclo.model';


const baseURL = "http://localhost:8090/rest";

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  constructor(private http:HttpClient) { }

  listaCiclos():Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(baseURL + "/ciclo");
  }
}
