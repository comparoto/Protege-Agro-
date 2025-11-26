import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service'; 
import { WeatherComponent } from '../../weather/weather.component';

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [
    CommonModule,
    WeatherComponent
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