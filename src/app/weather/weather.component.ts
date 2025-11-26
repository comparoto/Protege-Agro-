import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Importante para *ngIf
import { WeatherService } from '../weather';

@Component({
  selector: 'app-weather',
  standalone: true, // <--- Confirme que isso está true
  imports: [CommonModule], // <--- Adicione isso aqui
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() cidade: string = 'São Paulo'; 
  dadosClima: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.carregarClima(this.cidade);
  }

  carregarClima(cidade: string) {
    this.weatherService.buscarClima(cidade).subscribe({
      next: (dados) => this.dadosClima = dados,
      error: (e) => console.error(e)
    });
  }
}