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
      name: ["Saúde"],
      data: [["Brasil", 55, 12], [22, 34, 12]]
    },
    {
      name: ["Saúde"],
      data: [["Brasil", 55, 10], [22, 34, 33]]
    },
    {
      name: ["Saúde"],
      data: [["Brasil", 55, 9], [22, 34, 5]]
    }
  ];
  public xaxis : any = {
    categories: [
      "2016",
      "2017",
      // "Apr",
      // "May",
      // "Jun",
      // "Jul",
      // "Aug",
      // "Sep",
      // "Oct"
    ]
  };
  public chart: ApexChart = {
    type : 'bar'
  };
  constructor(
    private http: HttpClient,
    private paisesService: PaisesService
  ) {
  }

  ngOnInit() : void {
    this.paisesService.listaPorIndicadores({}).subscribe((response: any) => {
      // response.map((pais: any) => {
      //   pais.series.map((serie : any) => {
      //     console.log(serie)
      //     this.series.push({
      //       name: serie.pais.nome,
      //       data: serie.serie
      //     });
      //   });
      // })
    });
  }
}
