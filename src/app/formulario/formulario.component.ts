import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  nome: string = '';
  idade: number | null = null;
  resposta: string = '';

  constructor(private http: HttpClient) {}

  enviarDados() {
    console.log('Enviando dados:', { nome: this.nome, idade: this.idade });
    const url = `http://localhost/php/index.php?nome=${encodeURIComponent(this.nome)}&idade=${this.idade}`;
    console.log('URL da requisição:', url);

    this.http.get(url, {responseType: 'text'}).subscribe({
      next: (res) => {
        console.log('Resposta do servidor:', res);
        this.resposta = res;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erro na requisição:', error);
        if (error.status === 0) {
          this.resposta = 'Erro: Não foi possível conectar ao servidor. Verifique se o servidor PHP está rodando e se as configurações CORS estão corretas.';
        } else {
          this.resposta = `Erro ao enviar dados: ${error.message}`;
        }
      }
    });
  }
}
