import { Component } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  standalone: true,
  imports: [],
  templateUrl: './test-comp.component.html',
  styleUrl: './test-comp.component.css'
})
export class TestCompComponent {

  //variável de nome
  nome: string = "Guilherme";

  //Variável de média
  media : number = 0;

  //Função de média
  calculo(n1: number, n2: number){
    return (n1 + n2)/2;
  }
}
