import {RegiaoInterface} from "./regiao.interface";

export interface UfInterface {
  id: number;
  sigla: string;
  nome: string;
  regiao: RegiaoInterface;
}
