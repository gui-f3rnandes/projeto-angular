import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {


  //Texto
  nome : string = "Guilherme";

  //Objeto
  obj : any = {"nome": "Guilherme", "idade": 34};

  //Vetor de objetos
  alunos : any = [
    {"nome" : "Ana", "nota1" : 8, "nota2" : 9},
    {"nome" : "Julio", "nota1" : 7, "nota2" : 8},
    {"nome" : "Letícia", "nota1" : 3, "nota2" : 2},
    {"nome" : "Ricardo", "nota1" : 7, "nota2" : 7}
  ]
}
