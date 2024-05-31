import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(filters: any)  {
    return this.httpClient.get(environment.api_ibge_base_url_v3+'noticias?tipo='+filters.tipo+'&qtd=10&introsize=110&page='+filters.page);
  }
}
