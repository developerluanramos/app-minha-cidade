import { Component } from '@angular/core';
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
import {NzTableComponent} from "ng-zorro-antd/table";
import {NzCardComponent} from "ng-zorro-antd/card";

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
    NzRowDirective,
    NzTableComponent,
    NzCardComponent
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
  public anos: number[] = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  public selectedAnos: number[] = [];
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

  anoIsNotSelected(ano: number): boolean {
    return this.selectedAnos.indexOf(ano) === -1;
  }

  changeAno(ano: any) {
    this.selectedAnos = ano
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
    if(this.selectedAnos.length > 0
    && this.selectedIndicadores.length > 0
    && this.selectecPaises.length > 0)
    this.paisesService.listaPorIndicadores({
      selectedPaises: this.selectecPaises,
      selectedIndicadores: this.selectedIndicadores,
      selectedAnos: this.selectedAnos
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
          indicador: element,
          series: seriesData,
          xaxis: {
            categories: this.selectedAnos
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

  protected readonly JSON = JSON;
  protected readonly Object = Object;
}
