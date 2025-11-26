import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../environments/environment'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_NAME_KEY = 'protege_agro_username';
  private readonly apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  public login(dadosLogin: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, dadosLogin);
  }

  public registrar(dadosRegistro: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/register`, dadosRegistro);
  }

  salvarNomeUsuario(name: string): void {
    sessionStorage.setItem(this.USER_NAME_KEY, name);
  }

  getNomeUsuario(): string {
    return sessionStorage.getItem(this.USER_NAME_KEY) || 'Usuário';
  }

  limparDadosUsuario(): void {
    sessionStorage.removeItem(this.USER_NAME_KEY);
  }

  public baixarRelatorio(nomeArquivo: string): void {
  
    const caminho = `/${nomeArquivo}`;

    this.http.get(caminho, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = nomeArquivo; 
        document.body.appendChild(a);
        a.click();
        
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error: (erro) => {
        console.error('Erro ao baixar a imagem:', erro);
        alert('Não foi possível encontrar o arquivo: ' + nomeArquivo);
      }
    });
  }
}