export interface PaisInterface {
  id: {
    "M49":number;
    "ISO-ALPHA-2": string;
    "ISO-ALPHA-3": string;
  };
  nome: string;
  "regiao-intermediaria": {};
  "sub-regiao": {
    id: {
      "M49": number
    };
    nome: string;
    regiao:{id:{M49:number},nome:string};
  }
}
