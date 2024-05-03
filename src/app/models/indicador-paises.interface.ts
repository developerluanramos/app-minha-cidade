export interface IndicadorPaisesInterface {
  id: number;
  indicador: string;
  unidade: {
    id: string;
    classe: string;
    multiplicador: number;
  };
}
