export  interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

export interface ProdutoGroup {
  favoritos: Produto[];
  promocoes: Produto[];
  maisVendidos: Produto[];
}