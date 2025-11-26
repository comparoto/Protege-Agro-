import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service'; 

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropriedadesComponent {


  constructor(private authService: AuthService) { }

  onGerarRelatorio(): void {
    
    this.authService.baixarRelatorio('relatorio-indicadores-de-vulnerabilidade-por-propriedade.png');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}