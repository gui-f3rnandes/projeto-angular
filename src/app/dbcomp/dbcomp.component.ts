import { Component } from '@angular/core';
import { CompFormComponent } from "../comp-form/comp-form.component";
import { CompTableComponent } from "../comp-table/comp-table.component";

@Component({
  selector: 'app-dbcomp',
  standalone: true,
  imports: [CompFormComponent, CompTableComponent],
  templateUrl: './dbcomp.component.html',
  styleUrl: './dbcomp.component.css'
})
export class DbcompComponent {

  //Vetor
  nomes : string[] = ['Guilherme','André','Rafael','Lucca','Gustavo'];

  //Função cadastrar
  cadastrar(nome: string){
    this.nomes.push(nome);
  }
}
