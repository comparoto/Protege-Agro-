import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  
  visibilidadeSenhas = {
    senha: false,
    confirmarSenha: false
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService 
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      
      
      telefone: ['', [
        Validators.required, 
        this.validarTelefone 
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

  validarTelefone(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;

    if (!valor) {
      return null; 
    }

    const apenasNumeros = valor.replace(/\D/g, '');


    const isValido = apenasNumeros.length >= 10 && apenasNumeros.length <= 11;

    return isValido ? null : { telefoneInvalido: true };
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
   
    this.authService.registrar(this.cadastroForm.value).subscribe({
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
   
        const msg = erro.error?.message || 'Erro ao tentar cadastrar. Tente novamente.';
        console.error(msg); 
        alert(msg); 
      }
    });
  }
}