import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

import { environment } from '../environments/environment'

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_NAME_KEY = 'protege_agro_username';

  private readonly apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  public login(dadosLogin: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, dadosLogin).pipe(
      tap(() => {

        this.salvarNomeUsuario(dadosLogin.email || dadosLogin.username);
      })
    );
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
}