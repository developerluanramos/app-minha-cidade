import {NoticiaImagensInterface} from "./noticia-imagens.interface";

export interface NoticiaInterface {
  id: number;
  destaque: boolean;
  introducao: string;
  tipo: string;
  titulo: string;
  data_publicacao: Date;
  produto_id: string;
  produtos: string;
  imagens: NoticiaImagensInterface
}
