import { Component, EventEmitter, Output } from '@angular/core';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comp-form.component.html',
  styleUrl: './comp-form.component.css'
})
export class CompFormComponent {

  //Variável para o nome
  nome: string = "";

  //Output
  @Output() funcao = new EventEmitter<string>();

  //Função de cadastro
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }
}
