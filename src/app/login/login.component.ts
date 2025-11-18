import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  erroApi: string = '';
  senhaVisivel: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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

    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (resposta: any) => { 
          console.log('Resposta da API de login:', resposta);

          const nomeUsuario = resposta.nome; 
          
          if (nomeUsuario) {
            this.authService.salvarNomeUsuario(nomeUsuario);
          } 

          alert('Login realizado com sucesso!');
          this.router.navigate(['/layout']); 
        },
        error: (erro) => {
          console.error('Erro no login:', erro);

          const msg = erro.error?.message || 'Erro de conexão ou credenciais inválidas.';
          this.erroApi = msg;
        }
      });
  }
}