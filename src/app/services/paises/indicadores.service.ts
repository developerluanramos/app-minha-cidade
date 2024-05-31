import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll()  {
    return this.httpClient.get(environment.api_ibge_base_url_v1+'paises/indicadores/');
  }
}
