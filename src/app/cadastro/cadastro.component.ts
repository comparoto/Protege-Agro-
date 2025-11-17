import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm: FormGroup;
 
  apiUrl = 'https://protege-agro-api.vercel.app/'; 

  
  visibilidadeSenhas = {
    senha: false,
    confirmarSenha: false
  };


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService 
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]{10,11}$')
      ]],
      senha: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?]).{6,}$')
      ]],
      confirmarSenha: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      regiao: ['', [Validators.required]],
      cultivo: ['', [Validators.required]]
    }, { validators: this.senhasCoincidem });
  }

  get f() {
    return this.cadastroForm.controls;
  }

  toggleVisibilidade(campo: 'senha' | 'confirmarSenha'): void {
    this.visibilidadeSenhas[campo] = !this.visibilidadeSenhas[campo];
  }


  senhasCoincidem(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCoincidem: true };
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }
    
    const urlCadastro = `${this.apiUrl}/api/auth/register`;

    this.http.post(urlCadastro, this.cadastroForm.value).subscribe({
      next: (resposta) => {
        console.log('Resposta da API:', resposta);

        const nomeUsuario = this.cadastroForm.get('nome')?.value;
        if (nomeUsuario) {
          this.authService.salvarNomeUsuario(nomeUsuario);
        }
        
        console.log('Cadastro realizado com sucesso!');
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (erro) => {
        console.error('Erro no cadastro:', erro);
        
        const msg = erro.error?.message || 'Erro ao tentar cadastrar.';
        console.error(msg); 

      }
    });
  }
}
