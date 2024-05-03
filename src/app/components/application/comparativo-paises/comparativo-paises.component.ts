import { Component, OnInit, ViewChild } from '@angular/core';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {PaisesService} from "../../../services/paises.service";
import {PaisesService as LocalidadePaisesService} from "../../../services/localidades/paises.service";
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
  public charts: any = []
  public series: any = [

  ];
  chartOptions = {
    series: [],
    xaxis: {
      categories: ['2016', '2017', '2018']
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
  };

  public chartX: ApexChart = {
    type : 'bar',
    height: 350
  };

  constructor(
    private http: HttpClient,
    private paisesService: PaisesService,
    private localidadePaisesService: LocalidadePaisesService
  ) {
  }

  ngOnInit() : void {
    this.localidadePaisesService.listAll().subscribe(response =>{
      console.log(response)
    })
    this.paisesService.listaPorIndicadores({}).subscribe((response: any) => {
      // console.log(response[0])
      response.forEach((element: any) => {
        const seriesData: any = [];

        element.series.forEach((country : any) => {
          const countryName = country.pais.nome;
          const countryData : any = [];

          country.serie.forEach((yearData: any) => {
            const year = Object.keys(yearData)[0];
            const value = parseFloat(yearData[year]);
            countryData.push(value);
          });

          seriesData.push({
            name: countryName,
            data: countryData
          });
        });

        this.charts.push({
          series: seriesData,
          xaxis: {
            categories: ['2016', '2017', '2018']
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
        })
      });
    });
  }
}
