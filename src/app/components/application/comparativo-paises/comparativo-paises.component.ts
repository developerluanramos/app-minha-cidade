import { Component, OnInit, ViewChild } from '@angular/core';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {PaisesService} from "../../../services/paises.service";
import {ApexChart, NgApexchartsModule} from "ng-apexcharts";

@Component({
  selector: 'app-comparativo-paises',
  standalone: true,
  imports: [
    NzDividerComponent,
    NzSelectComponent,
    FormsModule,
    NzOptionComponent,
    NgIf,
    NgForOf,
    NzIconDirective,
    NgApexchartsModule
  ],
  templateUrl: './comparativo-paises.component.html',
  styleUrl: './comparativo-paises.component.scss'
})
export class ComparativoPaisesComponent {
  public series: any = [
    {
      name: "Brasil",
      data: [28, 15, 11, 23]
    },
    {
      name: "EUA",
      data: [12, 19, 22, 44]
    },
    {
      name: "México",
      data: [5, 7, 9, 8]
    },
    {
      name: "Canadá",
      data: [3, 6, 12, 28]
    }
  ];

  public xaxis: any = {
    categories: ["2016", "2017"],
    title: {
      text: "PERIODO"
    }
  };

  public chart: ApexChart = {
    type : 'line'
  };

  constructor(
    private http: HttpClient,
    private paisesService: PaisesService
  ) {
  }

  ngOnInit() : void {
    this.paisesService.listaPorIndicadores({}).subscribe((response: any) => {
      console.log(response)
      response.map((pais: any) => {
        pais.series.map((serie : any) => {
          console.log(serie)
          // this.series.push({
          //   name: serie.pais.nome,
          //   data: serie.serie
          // });
        });
      })
    });
  }
}
