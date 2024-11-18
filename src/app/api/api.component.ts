import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  //Vetor
  vetor : Produto[] = [];

  //Visibilidade dos botões
  btnCadastrar : boolean = true;

  //Objeto de formulário
  formulario = new FormGroup({
    id : new FormControl(null),
    nome : new FormControl(''),
    valor : new FormControl(null)
  });

  //Construtor
  constructor(private servico: ProdutoService){}

  //Inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  //Método para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  //Método para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();
    })
  }

  //Método para selecionar
  selecionarProduto(indice: number){
    this.formulario.setValue({
      id : this.vetor[indice].id,
      nome : this.vetor[indice].nome,
      valor : this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  //Método para alterar
  alterarProduto(){
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno => {
      
      //Obter o índice
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      //Alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      //Limpar o formulário
      this.formulario.reset();

      //Visibilidade dos botões
      this.btnCadastrar = true;
    });
  }

  //Método para remover
  removerProduto(){

    this.servico.remover(this.formulario.value.id).subscribe(() => {

      //Obter o índice do valor que será removido
      let indiceRmovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      //Remover objeto do vetor
      this.vetor.splice(indiceRmovido, 1);

      //Limpar o formulário
      this.formulario.reset();

      //Visibilidade dos botões
      this.btnCadastrar = true;
    });

  }

}
