import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private http: HttpClient
  ) { }

  listAll() {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
  }
}
