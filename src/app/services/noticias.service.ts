import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(filters: any)  {
    return this.httpClient.get('http://servicodados.ibge.gov.br/api/v3/noticias?qtd=10&introsize=110&page='+filters.page);
  }
}
