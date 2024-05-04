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
    let paisesIds: any[] = [];
    let indicadoresIds: any[] = [];

    filters.selectedPaises.forEach((pais: any) => {
      paisesIds.push(Object.values(pais.id)[1])
    })
    filters.selectedIndicadores.forEach((indicador: any) => {
      indicadoresIds.push(indicador.id)
    })

    return this.httpClient.get(
      'https://servicodados.ibge.gov.br/api/v1/paises/'
        + paisesIds.join('|')+'/indicadores/'+indicadoresIds.join('|') + '?periodo='+filters.selectedAnos.join(','),
    );
  }
}
