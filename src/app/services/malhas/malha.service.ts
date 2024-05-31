import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MalhaService {

  constructor(
    private http: HttpClient
  ) { }

  getByPaisId(paisId: string) {
    return this.http.get(environment.api_ibge_base_url_v3+'malhas/paises/BR?intrarregiao=UF', { responseType: 'blob' });
  }
}
