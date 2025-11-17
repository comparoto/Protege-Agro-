import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  
  apiUrl = 'https://protege-agro-api.vercel.app/'; 

  erroApi: string = '';
  senhaVisivel: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService 
  ) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]], 
      senha: ['',[Validators.required]] 
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  
  toggleVisibilidade(): void {
    this.senhaVisivel = !this.senhaVisivel;
  }

  onSubmit() {
    this.erroApi = '';
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return; 
    }

    const urlLogin = `${this.apiUrl}/api/auth/login`;

    this.http.post<any>(urlLogin, this.loginForm.value) 
      .subscribe({
        next: (resposta: any) => { 
          console.log('Resposta da API de login:', resposta);

          const nomeUsuario = resposta.nome; 
          
          if (nomeUsuario) {
            this.authService.salvarNomeUsuario(nomeUsuario);
          } else {
            console.warn('API de login não retornou o nome do usuário.');
          }
          
          alert('Login realizado com sucesso!');
          this.router.navigate(['/layout']); 
        },
        error: (erro) => {
          console.error('Erro no login:', erro);
        
          const msg = erro.error?.message || 'Erro de conexão ou login inválido.';
          this.erroApi = msg;
        }
      });
  }
}