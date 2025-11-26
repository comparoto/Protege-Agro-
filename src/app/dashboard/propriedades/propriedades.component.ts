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
cidadeAtual: string = 'Recife';

  locaisDasPropriedades: any = {
    'todas': 'Recife',
    'prop1': 'Olinda', 
    'prop2': 'Caruaru', 
    'prop3': 'Gravatá',
    'prop4': 'Bonito'
  };

  aoTrocarPropriedade(evento: any) {
    const idSelecionado = evento.target.value;
    
    
    this.cidadeAtual = this.locaisDasPropriedades[idSelecionado] || 'Recife';
    
    console.log("Trocando para:", this.cidadeAtual);
  }

  constructor(private authService: AuthService) { }

  onGerarRelatorio(): void {
    
    this.authService.baixarRelatorio('relatorio-indicadores-de-vulnerabilidade-por-propriedade.png');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}

