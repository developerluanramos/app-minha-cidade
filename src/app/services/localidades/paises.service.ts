import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private http: HttpClient
  ) { }

  listAll() {
    return this.http.get(environment.api_ibge_base_url_v1+'localidades/paises?orderBy=nome');
  }
}
