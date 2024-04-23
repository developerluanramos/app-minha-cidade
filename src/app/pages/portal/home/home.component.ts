import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UfInterface} from "../../../models/uf.interface";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public ufs : UfInterface | undefined;
  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get('http://servicodados.ibge.gov.br/api/v3/noticias?qtd=1&tipo=release').subscribe(
      (response : any) => {
        console.log(response)
        this.ufs = response
      }, error => {
        console.log(error)
      }
    );
  }

  ngOnInit() {
    console.log('teste')
  }

  protected readonly JSON = JSON;
}
