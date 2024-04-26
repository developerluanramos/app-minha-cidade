import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listaPorIndicadores(filters: any)  {
    return this.httpClient.get('https://servicodados.ibge.gov.br/api/v1/paises/AR|BR/indicadores/77819|77820?periodo=2016,2017');
  }
}
