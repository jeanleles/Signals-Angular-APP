import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoGroup } from '../../interfaces/model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos: ProdutoGroup = {
    favoritos: [],
    promocoes: [],
    maisVendidos: []
  };
  constructor() {
    this.produtos = {
      favoritos: [
        { nome: 'Produto favorito 1', preco: 10, quantidade: 2 },
        { nome: 'Produto favorito 2', preco: 20, quantidade: 4 },
        { nome: 'Produto favorito 3', preco: 30, quantidade: 6 }
      ],
      promocoes: [
        { nome: 'Produto promocao 4', preco: 35, quantidade: 18 },
        { nome: 'Produto promocao 5', preco: 40, quantidade: 20 },
        { nome: 'Produto promocao 6', preco: 45, quantidade: 22 },
        { nome: 'Produto promocao 7', preco: 50, quantidade: 24 }
      ],
      maisVendidos: [
        { nome: 'Produto mais vendidos 8', preco: 160, quantidade: 40 },
        { nome: 'Produto mais vendidos 9', preco: 180, quantidade: 45 },
        { nome: 'Produto mais vendidos 10', preco: 200, quantidade: 50 }
      ]
    }
    ;
  }

  OnInit(): void {
    console.log('OnInit')
  }

}
