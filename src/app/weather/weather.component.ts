import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges { 

  @Input() cidade: string = ''; 
  dadosClima: any;

  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    
    if(!this.cidade) this.cidade = 'Recife';
    this.carregarClima(this.cidade);
  }

  ngOnChanges(changes: SimpleChanges): void {
   
    if (changes['cidade'] && !changes['cidade'].isFirstChange()) {
      this.carregarClima(this.cidade);
    }
  }

  carregarClima(cidade: string) {

    this.dadosClima = null; 
    
    this.weatherService.buscarClima(cidade).subscribe({
      next: (dados) => {
        this.dadosClima = dados;
        this.cdr.detectChanges();
      },
      error: (e) => console.error(e)
    });
  }
}