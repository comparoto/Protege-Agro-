import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather'; 

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() cidade: string = 'São Paulo'; 
  dadosClima: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    if(!this.cidade) this.cidade = 'Sorriso';
    this.carregarClima(this.cidade);
  }

  carregarClima(cidade: string) {
    this.weatherService.buscarClima(cidade).subscribe({
      next: (dados) => {
        console.log("DADOS RECEBIDOS:", dados);
        this.dadosClima = dados;
      },
      error: (e) => {
        console.error("ERRO:", e);
      }
    });
  }
}