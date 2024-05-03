import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll()  {
    return this.httpClient.get('https://servicodados.ibge.gov.br/api/v1/paises/indicadores/');
  }
}
