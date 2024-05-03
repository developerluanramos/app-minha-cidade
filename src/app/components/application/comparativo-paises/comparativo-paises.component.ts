import { Component, OnInit, ViewChild } from '@angular/core';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {PaisesService} from "../../../services/paises/paises.service";
import {PaisesService as LocalidadePaisesService} from "../../../services/localidades/paises.service";
import {ApexChart, NgApexchartsModule} from "ng-apexcharts";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {IndicadoresService} from "../../../services/paises/indicadores.service";
import {IndicadorPaisesInterface} from "../../../models/indicador-paises.interface";
import {PaisInterface} from "../../../models/pais.interface";

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
    NgApexchartsModule,
    NgOptimizedImage,
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './comparativo-paises.component.html',
  styleUrl: './comparativo-paises.component.scss'
})
export class ComparativoPaisesComponent {
  public charts: any = [];
  public paises: PaisInterface[] = [];
  public selectecPaises: PaisInterface[] = [];
  public indicadores: IndicadorPaisesInterface[] = [];
  public selectedIndicadores: IndicadorPaisesInterface[] = [];

  public chartX: ApexChart = {
    type : 'bar',
    height: 350
  };

  constructor(
    private paisesService: PaisesService,
    private localidadePaisesService: LocalidadePaisesService,
    private indicadoresService: IndicadoresService
  ) {
  }

  ngOnInit() : void {
    this.localidadePaisesService.listAll().subscribe(response =>{
      this.paises = <PaisInterface[]>response
    });
    this.indicadoresService.listAll().subscribe(response => {
      this.indicadores = <IndicadorPaisesInterface[]>response
    });
  }

  paisIsNotSelected(pais: PaisInterface): boolean {
    return this.selectecPaises.indexOf(pais) === -1;
  }

  changePais(pais: any) {
    this.selectecPaises = pais
    this.listCharts();
  }

  indicadorIsNotSelected(indicador: IndicadorPaisesInterface): boolean {
    return this.selectedIndicadores.indexOf(indicador) === -1;
  }

  changeIndicador(indicador: any) {
    this.selectedIndicadores = indicador
    this.listCharts();
  }

  listCharts() {
    this.charts = [];
    this.paisesService.listaPorIndicadores({
      selectedPaises: this.selectecPaises,
      selectedIndicadores: this.selectedIndicadores
    }).subscribe((response: any) => {
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
