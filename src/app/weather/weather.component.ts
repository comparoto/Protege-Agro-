import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {

  @Input() cidade: string = ''; 
  dadosClima: any;      
  listaPrevisao: any[] = [];

  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(!this.cidade) this.cidade = 'Sorriso';
    this.carregarTudo(this.cidade);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cidade'] && !changes['cidade'].isFirstChange()) {
      this.carregarTudo(this.cidade);
    }
  }

  carregarTudo(cidade: string) {

    this.weatherService.buscarClima(cidade).subscribe({
      next: (dados) => {
        this.dadosClima = dados;
        this.cdr.detectChanges();
      }
    });

    this.weatherService.buscarPrevisao(cidade).subscribe({
      next: (dados: any) => {
 
        const apenasMeioDia = dados.list.filter((item: any) => item.dt_txt.includes('12:00:00'));
        
        this.listaPrevisao = apenasMeioDia.slice(0, 3);
        
        this.cdr.detectChanges();
      }
    });
  }
}