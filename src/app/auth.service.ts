import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_NAME_KEY = 'protege_agro_username';

  constructor() { }

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