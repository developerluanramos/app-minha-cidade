import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MalhaService {

  constructor(
    private http: HttpClient
  ) { }

  getByPaisId(paisId: string) {
    return this.http.get('https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?intrarregiao=UF', { responseType: 'blob' });
  }
}
