import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  message: string = 'Seja Bem-Vindo, ';

  constructor() {
    console.log('Construtor')
  }
  ngOnChanges(): void {
    console.log('OnChanges');
  }
  ngOnInit(): void {
    this.message = `${this.message} ${this.name}!`;
    console.log('OnInit')
  }

}
